import {
  Allergen,
  AllergenName as NameJa,
  AllergenNameEn as NameEn,
  AllergenIcon as Icon
} from "@/types/allergen";

// アレルゲン情報の配列
export const allergens: Allergen[] = [
  { id: 1, name: NameJa.WHEAT, nameEn: NameEn.WHEAT, icon: Icon.WHEAT },
  { id: 2, name: NameJa.BUCKWHEAT, nameEn: NameEn.BUCKWHEAT, icon: Icon.BUCKWHEAT },
  { id: 3, name: NameJa.EGG, nameEn: NameEn.EGG, icon: Icon.EGG },
  { id: 4, name: NameJa.MILK, nameEn: NameEn.MILK, icon: Icon.MILK },
  { id: 5, name: NameJa.PEANUT, nameEn: NameEn.PEANUT, icon: Icon.PEANUT },
  { id: 6, name: NameJa.WALNUT, nameEn: NameEn.WALNUT, icon: Icon.WALNUT },
  { id: 7, name: NameJa.SHRIMP, nameEn: NameEn.SHRIMP, icon: Icon.SHRIMP },
  { id: 8, name: NameJa.CRAB, nameEn: NameEn.CRAB, icon: Icon.CRAB }
];

export type AllergenName = typeof allergens[number]['name'];
