import { OptionBox } from "@/src/shared/ui/select";
import { WB_ADVERTISEMENT_TYPE, WbAdvertisementType } from "@/src/entities/wb/models";
import styles from "./AdvertisementTypeSelect.module.scss";

const availableTypes = ["Поиск"];

type AvailableType = (typeof availableTypes)[number];

const typesMap: Record<AvailableType, WbAdvertisementType> = {
    ["Поиск"]: WB_ADVERTISEMENT_TYPE.SEARCH,
};

type Props = {
    setType: (type: WbAdvertisementType) => void;
};

const AdvertisementTypeSelect = ({ setType }: Props) => {
    const handleType = (type: AvailableType) => {
        setType(typesMap[type]);
    };
    return (
        <OptionBox
            className={styles.advertisement_type_select}
            options={availableTypes}
            selectedOption="Поиск"
            renderHeadOption={item => (
                <div className={styles.advertisement_type_select__head}>
                    <p className={styles.advertisement_type_select__label}>Тип</p>
                    <p className={styles.advertisement_type_select__name}>{item}</p>
                </div>
            )}
        >
            <OptionBox.Head />
            <OptionBox.Content onSelected={handleType} />
        </OptionBox>
    );
};

export default AdvertisementTypeSelect;
