import { ObjectValues } from "@/src/shared/utils/types";

export const WB_ADVERTISEMENT_TYPE = {
    SEARCH: 6,
} as const;

export type WbAdvertisementType = ObjectValues<typeof WB_ADVERTISEMENT_TYPE>;
