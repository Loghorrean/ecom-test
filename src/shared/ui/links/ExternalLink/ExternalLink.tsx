import { AnchorHTMLAttributes, FC } from "react";
import styles from "./ExternalLink.module.scss";
import { useTargetBlank } from "@/src/shared/hooks/useTargetBlank";
import { cn } from "@/src/shared/utils/functions";

type Props = AnchorHTMLAttributes<HTMLAnchorElement>;

const ExternalLink: FC<Props> = ({ ...props }) => {
    const blank = useTargetBlank();
    return (
        <a {...props} {...blank} className={cn(styles.external_link, props.className)}>
            {props.children}
        </a>
    );
};

export default ExternalLink;
