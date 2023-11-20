import React, { PropsWithChildren, useContext } from "react";
import { isValueEmpty } from "@/src/shared/utils/functions";
import { WbAdvertisement, WbAdvertisementType } from "@/src/entities/wb/models";

export type MainWbAdvertisementsContextType = {
    type: WbAdvertisementType;
    setType: (type: WbAdvertisementType) => void;
    search: string;
    setSearch: (search: string) => void;
    regionId: number | undefined;
    setRegionId: (regionId: number | undefined) => void;
    advertisement: WbAdvertisement | null;
    loading: boolean;
};

const MainWbAdvertisementsContext = React.createContext<MainWbAdvertisementsContextType | null>(null);

export const useMainWbAdvertisementsContext = () => {
    const data = useContext(MainWbAdvertisementsContext);
    if (isValueEmpty(data)) {
        throw new Error("Hook cannot be used outside 'MainWbAdvertisements' context");
    }
    return data;
};

function MainWbAdvertisementsContextProvider(props: PropsWithChildren<MainWbAdvertisementsContextType>) {
    const { children, ...value } = props;
    return <MainWbAdvertisementsContext.Provider value={value}>{children}</MainWbAdvertisementsContext.Provider>;
}

export default MainWbAdvertisementsContextProvider;
