import { ApiClientFactory, ApiClientFactoryInterface } from "@/src/shared/api-client";
import { HttpHeaders } from "@/src/shared/utils/types";
import { WbManager } from "@/src/entities/wb/api/WbManager";

export class WbManagerFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: HttpHeaders) {
        this.apiClientFactory = new ApiClientFactory(`${baseUrl}/api/v1/wb`, headers);
    }

    public createWbManager(authToken: string) {
        return new WbManager(this.apiClientFactory.createAuthorizedClient(authToken));
    }
}
