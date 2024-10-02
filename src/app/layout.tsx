import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans, Noto_Sans_JP } from 'next/font/google'

const notoSans = Noto_Sans({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans',
})

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
})

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
    <html lang="ja" className={`${notoSans.variable} ${notoSansJP.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
