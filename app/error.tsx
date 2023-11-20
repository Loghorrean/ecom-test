"use client";

import { useEffect } from "react";
import PageLoader from "@/src/shared/ui/loaders/PageLoader";
import { Forbidden, Unauthorized } from "@/src/shared/models";
import { useRouter } from "next/navigation";

export default function ProtectedRoutesErrorHandler({ error }: { error: Error }) {
    const router = useRouter();
    useEffect(() => {
        if (error instanceof Unauthorized) {
            //Можно добавить оповещение о попытке входа без токена
            router.push("/auth/login");
        } else if (error instanceof Forbidden) {
            //Можно добавить оповещение о попытке входа по истекшему токену
            router.push("/auth/login");
        }
        console.error(error);
    }, [error]);

    return <PageLoader fixed />;
}
