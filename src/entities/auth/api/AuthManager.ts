import { ApiBearerToken, BearerToken } from "@/src/entities/auth/model";
import { ApiClientInterface } from "@/src/shared/api-client";

export class AuthManager {
    constructor(private readonly apiClient: ApiClientInterface) {}

    async login(email: string, password: string): Promise<BearerToken> {
        const { data } = await this.apiClient.post<ApiBearerToken>("/login/", {
            email,
            password,
        });
        //Remove proto and other unused properties
        return { access: data.access, refresh: data.refresh };
    }

    async refresh(token: string): Promise<BearerToken> {
        const { data } = await this.apiClient.post<ApiBearerToken>("/refresh/", { token });
        return { access: data.access, refresh: data.refresh };
    }
}
