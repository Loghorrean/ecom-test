import { BearerToken as ClientBearerToken } from "@/src/entities/auth/model";
import { AuthManager } from "@/src/entities/auth/api";
import { AuthTokenStorage } from "@/src/entities/auth/utils/AuthTokenStorage";
import { LockFactory } from "@/src/shared/utils/lock";
import { AuthTokenExpired } from "@/src/shared/utils/errors";
import { Unauthorized } from "@/src/shared/models";

export class AuthTokenManager {
    constructor(
        private readonly authManager: AuthManager,
        private readonly authTokenStorage: AuthTokenStorage,
        private readonly lockFactory: LockFactory
    ) {}

    public async has(): Promise<boolean> {
        const authToken = await this.resolve();
        return authToken !== null;
    }

    public async get(): Promise<string> {
        const authToken = await this.resolve();
        if (!authToken) {
            throw new AuthTokenExpired();
        }
        return authToken;
    }

    public create(bearerToken: ClientBearerToken): void {
        this.authTokenStorage.set(bearerToken);
    }

    public remove(): void {
        this.authTokenStorage.remove();
    }

    private async resolve(): Promise<string | null> {
        const lock = this.lockFactory.createLock("auth-token:resolve");
        try {
            await lock.acquire();

            const bearerToken = this.authTokenStorage.get();
            if (!bearerToken) {
                return null;
            }
            return bearerToken.access;
        } finally {
            lock.release();
        }
    }

    private async refresh(): Promise<string | null> {
        const oldBearerToken = this.authTokenStorage.get();
        if (oldBearerToken === null) {
            return null;
        }
        try {
            const result = await this.authManager.refresh(oldBearerToken.refresh);
            this.authTokenStorage.set(result);
            return result.access;
        } catch (error) {
            if (error instanceof Unauthorized) {
                return null;
            }
            console.error(error);
            throw error;
        }
    }
}
