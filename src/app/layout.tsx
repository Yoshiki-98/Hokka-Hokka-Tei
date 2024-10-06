import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ほっかほっか亭",
  description: "ほっかほっか亭のWebアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
