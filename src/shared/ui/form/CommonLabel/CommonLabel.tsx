import { AllHTMLAttributes, PropsWithChildren } from "react";
import styles from "./CommonLabel.module.scss";
import { cn } from "@/src/shared/utils/functions";

const CommonLabel = ({ htmlFor, children, ...props }: PropsWithChildren<AllHTMLAttributes<HTMLLabelElement>>) => {
    return (
        <label {...props} htmlFor={htmlFor} className={cn(styles.common_label, props.className)}>
            {children}
        </label>
    );
};

export default CommonLabel;
