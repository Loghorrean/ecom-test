import { PropsWithChildren } from "react";
import "@/src/main/index.scss";
import Providers from "@/src/main/providers/Providers";

export const metadata = {
    title: "WbHelper",
    description: "WbHelper",
};

export default function MainLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <Providers>
                <body>{children}</body>
            </Providers>
        </html>
    );
}
