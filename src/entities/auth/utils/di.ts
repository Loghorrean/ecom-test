import { createAuthManager } from "@/src/entities/auth/api";
import { AuthTokenStorage } from "@/src/entities/auth/utils/AuthTokenStorage";
import { AuthTokenManager } from "@/src/entities/auth/utils/AuthTokenManager";
import { LockFactory } from "@/src/shared/utils/lock";

export function createAuthTokenManager(): AuthTokenManager {
    return new AuthTokenManager(createAuthManager(), new AuthTokenStorage(), new LockFactory(window.localStorage));
}

export async function getAuthToken(): Promise<string> {
    const manager = createAuthTokenManager();
    return manager?.get() ?? "";
}
