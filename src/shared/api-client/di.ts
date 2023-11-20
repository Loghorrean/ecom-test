import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HttpHeaders } from "@/src/shared/utils/types";
import { BearerToken } from "@/src/entities/auth/model";
import { createAuthManager } from "@/src/entities/auth/api";
import { createWbManager, GetAdvertisementsListInput } from "@/src/entities/wb/api";
import { WbAdvertisement, WbRegion } from "@/src/entities/wb/models";

export function getBaseHeaders(): HttpHeaders {
    return {
        "Accept-Language": "ru",
    };
}

type LoginInput = {
    email: string;
    password: string;
};

export const wbHelperApi = createApi({
    reducerPath: "wbHelperApi",
    baseQuery: fetchBaseQuery({ baseUrl: "" }),
    endpoints: builder => {
        return {
            login: builder.mutation<BearerToken, LoginInput>({
                queryFn: async ({ email, password }: LoginInput) => {
                    const authManager = createAuthManager();
                    const data = await authManager.login(email, password);
                    return { data };
                },
            }),
            getRegions: builder.query<Array<WbRegion>, void>({
                queryFn: async () => {
                    const wbManager = await createWbManager();
                    const data = await wbManager.getRegions();
                    return { data };
                },
            }),
            getAdvertisements: builder.query<WbAdvertisement, GetAdvertisementsListInput>({
                queryFn: async input => {
                    const wbManager = await createWbManager();
                    const data = await wbManager.getAdvertisements(input);
                    return { data };
                },
            }),
        };
    },
});

export const { useLoginMutation, useGetRegionsQuery, useGetAdvertisementsQuery, useLazyGetAdvertisementsQuery } =
    wbHelperApi;
