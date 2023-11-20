import styles from "./PasswordInputContainer.module.scss";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import React, { FC, useRef } from "react";
import { CommonInputContainerProps } from "@/src/shared/ui/inputs/CommonInput/composables/CommonInputContainer/CommonInputContainer";
import { HideSvg, VisibleSvg } from "@/src/shared/ui/svg/password";
import Button from "../../../../buttons/Button";
import { usePasswordInputContext } from "@/src/shared/ui/inputs/PasswordInput/context/PasswordInputContext";
import { cn } from "@/src/shared/utils/functions";

const PasswordInputContainer: FC<CommonInputContainerProps> = ({ children, ...props }) => {
    const { toggle, active } = usePasswordInputContext();
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    return (
        <CommonInput.Container {...props} className={cn(styles.password_input_container, props.className)}>
            {children}
            <Button
                ref={buttonRef}
                className={styles.password_input_container__button}
                onClick={toggle}
                aria-pressed={active}
                type="button"
            >
                {active ? <HideSvg /> : <VisibleSvg />}
            </Button>
        </CommonInput.Container>
    );
};

export default PasswordInputContainer;
