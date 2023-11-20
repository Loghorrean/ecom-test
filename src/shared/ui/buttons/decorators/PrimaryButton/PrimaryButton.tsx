import { ClassNameDecorator } from "@/src/shared/ui/decorators";
import React, { PropsWithChildren } from "react";
import { ClassInjector } from "@/src/shared/ui/injectors";
import styles from "./PrimaryButton.module.scss";
import { ObjectValues } from "@/src/shared/utils/types";
import { cn, resultIf } from "@/src/shared/utils/functions";

export const PRIMARY_BUTTON_COLOR = {
    YELLOW: styles.primary_button___yellow,
} as const;

export type PrimaryButtonColor = ObjectValues<typeof PRIMARY_BUTTON_COLOR>;

interface Props {
    color?: PrimaryButtonColor;
    wide?: boolean;
    centered?: boolean;
}

const PrimaryButton: ClassNameDecorator<PropsWithChildren<Props>> = ({
    color = PRIMARY_BUTTON_COLOR.YELLOW,
    wide,
    centered = true,
    children,
    className,
}) => {
    return (
        <ClassInjector
            classNames={cn(
                styles.primary_button,
                color,
                resultIf(wide, styles.primary_button___wide),
                resultIf(centered, styles.primary_button___centered)
            )}
            oldClassName={className}
        >
            {children}
        </ClassInjector>
    );
};

export default PrimaryButton;
