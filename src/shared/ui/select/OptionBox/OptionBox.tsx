import React, { AllHTMLAttributes, PropsWithChildren, useCallback, useEffect, useId, useRef } from "react";
import styles from "./OptionBox.module.scss";
import { OptionBoxContent, OptionBoxHead } from "./composables";
import OptionBoxContextProvider, {
    OptionBoxContextType,
    OptionBoxNode,
} from "@/src/shared/ui/select/OptionBox/context/OptionBoxContext";
import { Nullable } from "@/src/shared/utils/types";
import { useHandleOutsideClick, useToggle } from "@/src/shared/hooks";
import { cn } from "@/src/shared/utils/functions";

export interface OptionBoxProps extends AllHTMLAttributes<HTMLDivElement> {
    options: Array<string>;
    selectedOption: Nullable<string>;
    renderOption?: (option: string) => OptionBoxNode;
    renderHeadOption?: (option: string) => OptionBoxNode;
}

const OptionBox = ({
    options,
    selectedOption,
    renderOption,
    renderHeadOption,
    children,
    ...props
}: PropsWithChildren<OptionBoxProps>) => {
    const [active, toggle, setActive] = useToggle();
    const id = useId();
    const ref = useRef<HTMLDivElement | null>(null);
    const handleClick = useHandleOutsideClick(() => setActive(false), ref);

    const renderCurrentOption =
        renderOption !== undefined ? renderOption : (option: string) => option as unknown as OptionBoxNode;

    const value: OptionBoxContextType = {
        options: options,
        selectedOption: selectedOption,
        render: renderCurrentOption,
        renderHead: renderHeadOption !== undefined ? renderHeadOption : renderCurrentOption,
        active: active,
        toggle,
        setActive,
        id,
    };

    const handleKeyPress = useCallback(
        (e: KeyboardEvent) => {
            if (active && e.key === "Escape") {
                setActive(false);
            }
        },
        [active]
    );

    useEffect(() => {
        if (active) {
            window.addEventListener("click", handleClick);
            window.addEventListener("keydown", handleKeyPress);
        }
        return () => {
            window.removeEventListener("click", handleClick);
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [active]);

    return (
        <OptionBoxContextProvider props={value}>
            <div {...props} className={cn(styles.option_box, props.className)} ref={ref}>
                {children}
            </div>
        </OptionBoxContextProvider>
    );
};

OptionBox.Head = OptionBoxHead;
OptionBox.Content = OptionBoxContent;

export default OptionBox;
