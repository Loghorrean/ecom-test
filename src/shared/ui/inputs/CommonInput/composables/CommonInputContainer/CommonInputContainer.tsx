import styles from "./CommonInputContainer.module.scss";
import React, { FC, PropsWithChildren } from "react";
import { useCommonInputContext } from "@/src/shared/ui/inputs/CommonInput/context/CommonInputContext";
import { BlockProps } from "@/src/shared/utils/types";
import { cn, resultIf } from "@/src/shared/utils/functions";

export type CommonInputContainerProps = PropsWithChildren<BlockProps>;

const CommonInputContainer: FC<CommonInputContainerProps> = ({ children, ...props }) => {
    const { error, disabled } = useCommonInputContext();
    return (
        <div
            {...props}
            className={cn(
                styles.common_input_container,
                resultIf(error, styles.common_input_container___error),
                resultIf(disabled, styles.common_input_container___disabled),
                props.className
            )}
        >
            {children}
        </div>
    );
};

export default React.memo(CommonInputContainer);
