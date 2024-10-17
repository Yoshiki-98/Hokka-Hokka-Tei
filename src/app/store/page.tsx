import StoreList from 'src/components/store/store-list';
import type { Metadata } from "next";
import "src/app/globals.css";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "店舗情報｜ほっかほっか亭",
    description: "ほっかほっか亭のWebサイト。企業情報、店舗案内、フランチャイズ情報や、お問い合せ連絡先を掲載しています。",
  };
};

export default function Home() {
  return (
    <main>
      <StoreList />
    </main>
  )
}
