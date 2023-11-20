"use client";

import styles from "./WbRegionsList.module.scss";
import { useGetRegionsQuery } from "@/src/shared/api-client";
import { useMemo } from "react";
import Loader from "@/src/shared/ui/loaders/Loader";
import { isValueEmpty } from "@/src/shared/utils/functions";
import { useMainWbAdvertisementsContext } from "@/src/widgets/advertisements/MainWbAdvertisementsBlock/context/MainWbAdvertisementsContext";

const WbRegionsList = () => {
    const { regionId, setRegionId } = useMainWbAdvertisementsContext();
    const { data, isLoading } = useGetRegionsQuery();
    const renderRegions = useMemo(() => {
        if (isLoading) {
            return <Loader dark />;
        }
        if (isValueEmpty(data)) {
            return <div>Регионы не найдены</div>;
        }
        return (
            <ul className={styles.wb_regions_list}>
                {data.map(region => (
                    <li
                        role="option"
                        key={region.id}
                        className={styles.wb_regions_list__item}
                        aria-selected={region.id === regionId}
                        onClick={() => setRegionId(region.id === regionId ? undefined : region.id)}
                    >
                        {region.name}
                    </li>
                ))}
            </ul>
        );
    }, [isLoading, data, regionId]);
    return renderRegions;
};

export default WbRegionsList;
