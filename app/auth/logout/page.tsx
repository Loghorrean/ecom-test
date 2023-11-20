"use client";

import { useRouter } from "next/navigation";
import PageLoader from "@/src/shared/ui/loaders/PageLoader";
import { useLayoutEffect } from "react";
import { createAuthTokenManager } from "@/src/entities/auth/utils";
import { useDispatch } from "react-redux";
import { wbHelperApi } from "@/src/shared/api-client";

export default function LogoutPage() {
    const router = useRouter();
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        const tokenManager = createAuthTokenManager();
        tokenManager.remove();
        dispatch(wbHelperApi.util?.resetApiState());
        router.push("/auth/login");
    }, []);
    return <PageLoader fixed />;
}
