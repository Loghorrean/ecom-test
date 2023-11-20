import { ApiClientInterface } from "@/src/shared/api-client";
import { WbAdvertisement, WbAdvertisementType, WbRegion } from "@/src/entities/wb/models";
import { buildQuery } from "@/src/shared/utils/functions";

export type GetAdvertisementsListInput = {
    type: WbAdvertisementType;
    input: string;
    region_id?: number;
};

export class WbManager {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async getRegions(): Promise<Array<WbRegion>> {
        return (await this.apiClient.get<Array<WbRegion>>("/regions/")).data;
    }

    public async getAdvertisements(listInput: GetAdvertisementsListInput): Promise<WbAdvertisement> {
        const { input, type, region_id } = listInput;
        const endpoint = `/adverts/?${buildQuery({ type, input, region_id })}`;
        return (await this.apiClient.get<WbAdvertisement>(endpoint)).data;
    }
}
