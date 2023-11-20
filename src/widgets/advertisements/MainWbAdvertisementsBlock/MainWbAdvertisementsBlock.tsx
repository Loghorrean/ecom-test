"use client";

import styles from "./MainWbAdvertisementsBlock.module.scss";
import AdvertisementsSearch from "@/src/features/advertisements/AdvertisementsSearch";
import { useState } from "react";
import { WB_ADVERTISEMENT_TYPE, WbAdvertisementType } from "@/src/entities/wb/models";
import MainWbAdvertisementsContextProvider, {
    MainWbAdvertisementsContextType,
} from "@/src/widgets/advertisements/MainWbAdvertisementsBlock/context/MainWbAdvertisementsContext";
import { useGetAdvertisementsQuery } from "@/src/shared/api-client";
import { isNotEmpty, isValueEmpty } from "@/src/shared/utils/functions";
import SubjectPriorityList from "../SubjectPriorityList";
import AdvertisementsListBlock from "@/src/widgets/advertisements/AdvertisementsListBlock/AdvertisementsListBlock";

const MainWbAdvertisementsBlock = () => {
    const [type, setType] = useState<WbAdvertisementType>(WB_ADVERTISEMENT_TYPE.SEARCH);
    const [search, setSearch] = useState("тарелки");
    const [regionId, setRegionId] = useState<number | undefined>(undefined);
    const { data, isLoading, isFetching, error } = useGetAdvertisementsQuery({
        type,
        input: search,
        region_id: regionId,
    });
    const value: MainWbAdvertisementsContextType = {
        type,
        setType,
        search,
        setSearch,
        regionId,
        setRegionId,
        advertisement: isNotEmpty(data) && isValueEmpty(error) ? data : null,
        loading: isLoading || isFetching,
    };
    return (
        <MainWbAdvertisementsContextProvider {...value}>
            <div className={styles.main_wb_advertisements_block}>
                <AdvertisementsSearch />
                <AdvertisementsListBlock />
                <SubjectPriorityList />
            </div>
        </MainWbAdvertisementsContextProvider>
    );
};

export default MainWbAdvertisementsBlock;
