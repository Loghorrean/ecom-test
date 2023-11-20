import styles from "./CommonButtonGroup.module.scss";
import { PropsWithChildren } from "react";
import { BlockProps } from "@/src/shared/utils/types";
import { cn } from "@/src/shared/utils/functions";

const CommonInputGroup = ({ children, ...props }: PropsWithChildren<BlockProps>) => {
    return (
        <div {...props} className={cn(styles.common_button_group, props.className)}>
            {children}
        </div>
    );
};

export default CommonInputGroup;
