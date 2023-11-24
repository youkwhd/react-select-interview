import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
    title: "React Select Interview",
    description: "React select interview solution",
};

export default ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
};
