import React, { createContext, Dispatch, PropsWithChildren, ReactElement, SetStateAction, useContext } from "react";
import { Nullable } from "@/src/shared/utils/types";
import { isValueEmpty } from "@/src/shared/utils/functions";

export type OptionBoxNode = string | ReactElement;

export type OptionBoxContextType = {
    options: Array<string>;
    selectedOption: Nullable<string>;
    render: (option: string) => OptionBoxNode;
    renderHead: (option: string) => OptionBoxNode;
    active: boolean;
    toggle: () => void;
    setActive: Dispatch<SetStateAction<boolean>>;
    id: string;
};

type Props = {
    props: OptionBoxContextType;
};

const OptionBoxContext = createContext<OptionBoxContextType | null>(null);

export function useOptionBoxContext() {
    const data = useContext(OptionBoxContext);
    if (isValueEmpty(data)) {
        throw new Error("Component cannot be used outside 'OptionBox' context");
    }
    return data;
}

function OptionBoxContextProvider(props: PropsWithChildren<Props>) {
    const { children, ...value } = props;
    return <OptionBoxContext.Provider value={value.props}>{children}</OptionBoxContext.Provider>;
}

export default OptionBoxContextProvider;
