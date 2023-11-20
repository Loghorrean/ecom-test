import { AxiosResponseHeaders, RawAxiosResponseHeaders } from "axios";

export interface ApiClientInterface {
    get<T>(
        endpoint: string,
        params?: object
    ): Promise<{ data: T; headers: RawAxiosResponseHeaders | AxiosResponseHeaders }>;
    post<T>(
        endpoint: string,
        data?: object
    ): Promise<{ data: T; headers: RawAxiosResponseHeaders | AxiosResponseHeaders }>;
    put<T>(
        endpoint: string,
        data?: object
    ): Promise<{ data: T; headers: RawAxiosResponseHeaders | AxiosResponseHeaders }>;
}
