"use client";

import styles from "./AdvertisementsSearch.module.scss";
import Heading from "@/src/shared/ui/typography/Heading";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import AdvertisementTypeSelect from "@/src/entities/wb/ui/AdvertisementTypeSelect";
import { useState } from "react";
import { useMainWbAdvertisementsContext } from "@/src/widgets/advertisements/MainWbAdvertisementsBlock/context/MainWbAdvertisementsContext";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import { Button } from "@/src/shared/ui/buttons";
import SearchIcon from "@/src/shared/ui/svg/common/SearchIcon";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";

const AdvertisementsSearch = () => {
    const { search, setSearch, setType } = useMainWbAdvertisementsContext();
    const [cacheSearch, setCacheSearch] = useState(search);
    return (
        <CommonBlock className={styles.advertisements_search}>
            <Heading headingType={HEADING_TYPE.H1} className={styles.advertisements_search__heading}>
                Актуальные ставки
            </Heading>
            <div className={styles.advertisements_search__block}>
                <AdvertisementTypeSelect setType={setType} />
                <CommonInput id="advertisements-search" value={cacheSearch} onChange={setCacheSearch}>
                    <CommonInput.Container className={styles.advertisements_search__input}>
                        <CommonInput.Input placeholder="Поиск по названию или артикулу" />
                        <SearchIcon />
                    </CommonInput.Container>
                </CommonInput>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.YELLOW}>
                    <Button
                        type="button"
                        onClick={() => setSearch(cacheSearch)}
                        className={styles.advertisements_search__submit}
                    >
                        Найти
                    </Button>
                </PrimaryButton>
            </div>
        </CommonBlock>
    );
};

export default AdvertisementsSearch;
