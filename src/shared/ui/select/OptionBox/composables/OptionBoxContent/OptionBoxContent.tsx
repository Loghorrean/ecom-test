import React, { AllHTMLAttributes, ReactNode, useRef } from "react";
import styles from "./OptionBoxContent.module.scss";
import { CSSTransition } from "react-transition-group";
import { useOptionBoxContext } from "@/src/shared/ui/select/OptionBox/context/OptionBoxContext";
import { cn, isNotEmpty } from "@/src/shared/utils/functions";
import { useEffectOnUpdate } from "@/src/shared/hooks";
import { isScrollable, maintainScrollVisibility } from "@/src/shared/utils/dom";

interface Props extends AllHTMLAttributes<HTMLDivElement> {
    onSelected: (selected: string) => void;
}

const OptionBoxContent = ({ onSelected, ...props }: Props) => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const { setActive, selectedOption, options, active, render, id } = useOptionBoxContext();

    const selectOption = (option: string): void => {
        onSelected(option);
        setActive(false);
    };

    const isSelected = (option: string): boolean => {
        return selectedOption === option;
    };

    const renderOptions = (): ReactNode => {
        if (options.length === 0) {
            return (
                <div className={cn(styles.option_box__item, styles.option_box__item___disabled)}>
                    No options are provided
                </div>
            );
        }
        return (
            <ul className={styles.option_box__list}>
                {options.map((option: string, index: number) => {
                    const renderedOption = render(option);
                    return (
                        <li
                            key={index}
                            role="option"
                            aria-selected={isSelected(option)}
                            onMouseDown={() => selectOption(option)}
                            className={styles.option_box__item}
                        >
                            {typeof renderedOption === "string" ? <span>{renderedOption}</span> : renderedOption}
                        </li>
                    );
                })}
            </ul>
        );
    };

    useEffectOnUpdate(() => {
        const element = contentRef.current!;
        const items = element.children[0].children;
        let currentItemIndex = 0;
        if (isNotEmpty(selectedOption)) {
            for (const current of items) {
                if (
                    current.innerHTML.toLowerCase() ===
                    (render(selectedOption) as NonNullable<ReactNode>).toString().toLowerCase()
                ) {
                    break;
                }
                ++currentItemIndex;
            }
        }
        if (active) {
            for (let i = 0; i < items.length; ++i) {
                (items[i] as HTMLElement).dataset.current = (i === currentItemIndex).toString();
            }
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (!active) {
                return;
            }
            //TODO: REFACTOR
            if (event.code === "ArrowDown" && currentItemIndex + 1 <= items.length - 1) {
                (items[currentItemIndex] as HTMLElement).dataset.current = "false";
                (items[currentItemIndex + 1] as HTMLElement).dataset.current = "true";
                ++currentItemIndex;
                if (isScrollable(element)) {
                    maintainScrollVisibility(items[currentItemIndex] as HTMLElement, element);
                }
                return;
            }
            if (event.code === "ArrowUp" && currentItemIndex - 1 >= 0) {
                (items[currentItemIndex] as HTMLElement).dataset.current = "false";
                (items[currentItemIndex - 1] as HTMLElement).dataset.current = "true";
                --currentItemIndex;
                if (isScrollable(element)) {
                    maintainScrollVisibility(items[currentItemIndex] as HTMLElement, element);
                }
                return;
            }
            if (event.code === "Enter") {
                selectOption(options[currentItemIndex]);
                return;
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [active]);

    return (
        <CSSTransition
            in={active}
            timeout={500}
            classNames={{
                enter: styles.option_box__content___enter,
                enterActive: styles.option_box__content___enter_active,
                enterDone: styles.option_box__content___enter_done,
                exit: styles.option_box__content___exit,
                exitActive: styles.option_box__content___exit_active,
                exitDone: styles.option_box__content___exit_done,
            }}
        >
            <div
                {...props}
                id={id}
                className={cn(styles.option_box__content, props.className)}
                tabIndex={-1}
                role="listbox"
                ref={contentRef}
            >
                {renderOptions()}
            </div>
        </CSSTransition>
    );
};

export default OptionBoxContent;
