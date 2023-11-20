import React, { Children, isValidElement, PropsWithChildren } from "react";
import { isValueEmpty, isPrimitive, cn } from "@/src/shared/utils/functions";

interface Props {
    classNames: string;
    oldClassName?: string | undefined;
}

const ClassInjector = ({ classNames, oldClassName, children }: PropsWithChildren<Props>) => {
    if (Children.count(children) > 1 || isValueEmpty(children)) {
        throw new Error(`Wrong children type (count: ${Children.count(children)})`);
    }
    const StyledChild = () => {
        const onlyChild = Children.only(children);
        if (!isValidElement(onlyChild) || isPrimitive(onlyChild)) {
            throw new Error("Invalid child element");
        }
        return React.cloneElement(onlyChild, {
            className: `${cn(classNames, oldClassName ?? "", onlyChild.props.className)}`,
        } as Partial<HTMLElement>);
    };

    return <StyledChild />;
};

export default ClassInjector;
