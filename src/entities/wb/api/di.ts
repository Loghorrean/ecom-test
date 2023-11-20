import { WbManagerFactory } from "@/src/entities/wb/api/WbManagerFactory";
import { appConfig } from "@/src/shared/configs";
import { getBaseHeaders } from "@/src/shared/api-client";
import { getAuthToken } from "@/src/entities/auth/utils";

export const createWbManager = async () => {
    const factory = new WbManagerFactory(appConfig.apiBaseUrl, getBaseHeaders());
    return factory.createWbManager(await getAuthToken());
};
