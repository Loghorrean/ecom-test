export const appConfig = {
    get apiBaseUrl() {
        return process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
    },
};
