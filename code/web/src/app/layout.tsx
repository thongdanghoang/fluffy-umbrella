import type {Metadata} from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "中文打字练习 — Chinese Typing Practice",
    description:
        "Practice typing pinyin while seeing Chinese characters with pinyin annotations. Reinforce your character-to-pronunciation mapping in an interactive way.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-CN">
        <body>{children}</body>
        </html>
    );
}
