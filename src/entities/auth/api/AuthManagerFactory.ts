import { AuthManager } from "@/src/entities/auth/api/AuthManager";
import { ApiClientFactory, ApiClientFactoryInterface } from "@/src/shared/api-client";
import { HttpHeaders } from "@/src/shared/utils/types";

export class AuthManagerFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: HttpHeaders) {
        this.apiClientFactory = new ApiClientFactory(`${baseUrl}/api/v1/users`, headers);
    }

    createLoginManager(): AuthManager {
        return new AuthManager(this.apiClientFactory.createClient());
    }
}
