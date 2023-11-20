import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import { CommonInputInputProps } from "@/src/shared/ui/inputs/CommonInput/composables/CommonInputInput/CommonInputInput";
import React, { ForwardedRef } from "react";
import { usePasswordInputContext } from "@/src/shared/ui/inputs/PasswordInput/context/PasswordInputContext";
import styles from "./PasswordInputInput.module.scss";
import { cn } from "@/src/shared/utils/functions";

type Props = Omit<CommonInputInputProps, "aria-required" | "type">;

function PasswordInputInput({ ...props }: Props, ref: ForwardedRef<HTMLInputElement>) {
    const { active } = usePasswordInputContext();
    return (
        <CommonInput.Input
            {...props}
            className={cn(styles.password_input_input, props.className)}
            ref={ref}
            type={active ? "text" : "password"}
            aria-required
        />
    );
}

export default React.forwardRef(PasswordInputInput);
