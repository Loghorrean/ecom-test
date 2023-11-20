import React, { AllHTMLAttributes, FC } from "react";
import { ObjectValues } from "@/src/shared/utils/types";

export const HEADING_TYPE = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
} as const;

export type HeadingType = ObjectValues<typeof HEADING_TYPE>;

export type HeadingProps = AllHTMLAttributes<HTMLHeadingElement>;

interface Props extends HeadingProps {
    headingType: HeadingType;
}

const Heading: FC<Props> = ({ headingType, children, ...props }) => {
    return React.createElement(headingType, { ...props }, children);
};

export default Heading;
