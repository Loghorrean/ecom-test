import React, { PropsWithChildren } from "react";
import CommonInputContextProvider, {
    CommonInputContextType,
} from "@/src/shared/ui/inputs/CommonInput/context/CommonInputContext";
import CommonInputInput from "@/src/shared/ui/inputs/CommonInput/composables/CommonInputInput";
import CommonInputContainer from "@/src/shared/ui/inputs/CommonInput/composables/CommonInputContainer";

export type CommonInputProps = {
    value?: string;
    onChange?: (value: string) => void;
    error?: boolean;
    id: string;
    disabled?: boolean;
};

const CommonInput = ({
    value,
    onChange,
    error,
    disabled = false,
    id,
    children,
}: PropsWithChildren<CommonInputProps>) => {
    const contextValue: CommonInputContextType = {
        value,
        onChange,
        error,
        id,
        disabled,
    };
    return <CommonInputContextProvider {...contextValue}>{children}</CommonInputContextProvider>;
};

CommonInput.Input = CommonInputInput;
CommonInput.Container = CommonInputContainer;

export default CommonInput;
