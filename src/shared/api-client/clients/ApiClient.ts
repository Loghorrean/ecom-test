import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponseHeaders,
    RawAxiosResponseHeaders,
    AxiosError,
} from "axios";
import { ApiClientInterface } from "./ApiClientInterface";
import { Forbidden, HttpError, Unauthorized } from "../../models";
import { HttpHeaders } from "@/src/shared/utils/types";

export class ApiClient implements ApiClientInterface {
    constructor(
        private readonly baseUrl: string,
        private readonly headers: HttpHeaders,
        private readonly authToken: string = ""
    ) {}

    public async get<T>(
        endpoint = "",
        params?: object
    ): Promise<{ data: T; headers: RawAxiosResponseHeaders | AxiosResponseHeaders }> {
        try {
            const client = this.createClient(params);
            const response = await client.get(endpoint);
            return {
                data: response.data,
                headers: response.headers,
            };
        } catch (error: unknown) {
            this.handleError(error as AxiosError);
        }
    }

    public async post<T>(
        endpoint = "",
        data?: object
    ): Promise<{ data: T; headers: RawAxiosResponseHeaders | AxiosResponseHeaders }> {
        try {
            const client = this.createClient();
            const response = await client.post(endpoint, data);
            return {
                data: response.data,
                headers: response.headers,
            };
        } catch (error) {
            this.handleError(error as AxiosError);
        }
    }

    public async put<T>(
        endpoint = "",
        data?: object
    ): Promise<{ data: T; headers: RawAxiosResponseHeaders | AxiosResponseHeaders }> {
        try {
            const client = this.createClient();
            const response = await client.put(endpoint, data);
            return {
                data: response.data,
                headers: response.headers,
            };
        } catch (error) {
            this.handleError(error as AxiosError);
        }
    }

    private createClient(params: object = {}): AxiosInstance {
        const config: AxiosRequestConfig = {
            baseURL: this.baseUrl,
            headers: { ...this.headers, "Content-Type": "application/json" },
            params: params,
        };
        if (this.authToken) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${this.authToken}`,
            };
        }
        return axios.create(config);
    }

    private handleError(error: AxiosError): never {
        if (!error.response) {
            throw new HttpError(error.message);
        } else if (error.response.status === 401) {
            throw new Unauthorized();
        } else if (error.response.status === 403) {
            throw new Forbidden();
        } else {
            throw error;
        }
    }
}
