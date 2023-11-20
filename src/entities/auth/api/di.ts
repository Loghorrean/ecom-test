import { AuthManager } from "@/src/entities/auth/api/AuthManager";
import { AuthManagerFactory } from "@/src/entities/auth/api/AuthManagerFactory";
import { appConfig } from "@/src/shared/configs";
import { getBaseHeaders } from "@/src/shared/api-client";

export const createAuthManager = (): AuthManager => {
    const factory = new AuthManagerFactory(appConfig.apiBaseUrl, getBaseHeaders());
    return factory.createLoginManager();
};
