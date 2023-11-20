import styles from "./styles.module.scss";
import { Content } from "@/src/shared/ui/layout";
import { CONTENT_TYPE } from "@/src/shared/ui/layout/Content/Content";
import MainLogoImage from "@/src/shared/ui/images/MainLogoImage";
import { PropsWithChildren } from "react";
import Main from "@/src/shared/ui/layout/Main";

export default function AuthLayout({ children }: PropsWithChildren) {
    return (
        <Content type={CONTENT_TYPE.NO_FOOTER}>
            <header className={styles.auth_layout_header}>
                <MainLogoImage />
            </header>
            <Main>{children}</Main>
        </Content>
    );
}
