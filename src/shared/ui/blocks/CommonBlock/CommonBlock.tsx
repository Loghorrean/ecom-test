import styles from "./CommonBlock.module.scss";
import { ElementType, JSX } from "react";
import { PolymorphicBlockProps } from "@/src/shared/utils/types/PolymorphicBlockProps";
import { cn } from "@/src/shared/utils/functions";

export type CommonBlockProps<T extends ElementType> = PolymorphicBlockProps<T>;

type As = Extract<keyof JSX.IntrinsicElements, "div" | "article" | "section">;

function CommonBlock<T extends As = "div">({ as, children, ...props }: CommonBlockProps<T>) {
    const Component = as ?? "div";
    return (
        <Component {...props} className={cn(styles.common_block, props.className)}>
            {children}
        </Component>
    );
}

export default CommonBlock;
