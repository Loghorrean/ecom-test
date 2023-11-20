import { useMainWbAdvertisementsContext } from "@/src/widgets/advertisements/MainWbAdvertisementsBlock/context/MainWbAdvertisementsContext";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import Heading from "@/src/shared/ui/typography/Heading";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import styles from "./SubjectPriorityList.module.scss";
import { useMemo } from "react";
import { isValueEmpty } from "@/src/shared/utils/functions";
import Loader from "@/src/shared/ui/loaders/Loader";

const SubjectPriorityList = () => {
    const { advertisement, loading } = useMainWbAdvertisementsContext();
    const renderPriorities = useMemo(() => {
        if (loading) {
            return <Loader dark />;
        }
        if (isValueEmpty(advertisement)) {
            return <div>Приоритеты не найдены</div>;
        }
        return (
            <ul>
                {advertisement.subject_priorities
                    .toSorted((a, b) => a.position - b.position)
                    .map(item => (
                        <li key={item.id} className={styles.subject_priority_list__entry}>
                            <span>{item.position}</span>
                            <span>{item.name}</span>
                        </li>
                    ))}
            </ul>
        );
    }, [advertisement?.subject_priorities, loading]);
    return (
        <CommonBlock as="section" className={styles.subject_priority_list}>
            <Heading headingType={HEADING_TYPE.H2}>Приоритет категорий</Heading>
            {renderPriorities}
        </CommonBlock>
    );
};

export default SubjectPriorityList;
