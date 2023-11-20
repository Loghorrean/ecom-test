import { AdvertisementBet, SubjectPriority } from "@/src/entities/wb/models/composables";

export interface WbAdvertisement {
    bets: Array<AdvertisementBet>;
    subject_priorities: Array<SubjectPriority>;
}
