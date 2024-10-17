import MenuList from '@/components/menu/menu-list';
import type { Metadata } from "next";
import "src/app/globals.css";

export const metadata: Metadata = {
  title: "メニューを見る | ほっかほっか亭",
  description: "ほっかほっか亭（ほか弁）のメニュー一覧です。各地域のお弁当の紹介や、アレルギー・栄養成分の一覧などを掲載しています。",
};

export default function Home() {
  return (
    <main>
      <MenuList />
    </main>
  );
}
