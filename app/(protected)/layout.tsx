"use client";

import { PropsWithChildren, useLayoutEffect, useState } from "react";
import { AuthTokenStorage } from "@/src/entities/auth/utils";
import { isValueEmpty } from "@/src/shared/utils/functions";
import { Content } from "@/src/shared/ui/layout";
import { CONTENT_TYPE } from "@/src/shared/ui/layout/Content/Content";
import Header from "@/src/widgets/layout/Header";
import Main from "@/src/shared/ui/layout/Main";
import PageLoader from "@/src/shared/ui/loaders/PageLoader";
import { Unauthorized } from "@/src/shared/models";

// Т.к. токен хранится на уровне localStorage, и я не могу проверить токен по полю с условной датой экспирации,
// пришлось сделать такую логику для блокировки пользователей без токена
export default function ProtectedLayout({ children }: PropsWithChildren) {
    const [isLoading, setIsLoading] = useState(true);
    useLayoutEffect(() => {
        const tokenStorage = new AuthTokenStorage();
        if (isValueEmpty(tokenStorage.get())) {
            throw new Unauthorized();
        }
        setIsLoading(false);
    }, []);

    return (
        <Content type={CONTENT_TYPE.NO_FOOTER}>
            {isLoading ? (
                <PageLoader />
            ) : (
                <>
                    <Header />
                    <Main>{children}</Main>
                </>
            )}
        </Content>
    );
}
