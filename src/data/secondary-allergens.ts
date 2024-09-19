import { SecondaryAllergen, SecondaryAllergenName as NAME } from "@/types/secondary-allergen";

// アレルゲン情報の配列
export const secondaryAllergens: SecondaryAllergen[] = [
  { id: 1, name: NAME.ABALONE },
  { id: 2, name: NAME.SQUID },
  { id: 3, name: NAME.SALMON_ROE },
  { id: 4, name: NAME.ALMOND },
  { id: 5, name: NAME.ORANGE },
  { id: 6, name: NAME.CASHEW_NUT },
  { id: 7, name: NAME.KIWI_FRUIT },
  { id: 8, name: NAME.BEEF },
  { id: 9, name: NAME.WALNUT },
  { id: 10, name: NAME.SESAME },
  { id: 11, name: NAME.SALMON },
  { id: 12, name: NAME.MACKEREL },
  { id: 13, name: NAME.SOYBEAN },
  { id: 14, name: NAME.CHICKEN },
  { id: 15, name: NAME.BANANA },
  { id: 16, name: NAME.PORK },
  { id: 17, name: NAME.MATSUTAKE_MUSHROOM },
  { id: 18, name: NAME.PEACH },
  { id: 19, name: NAME.JAPANESE_YAM },
  { id: 20, name: NAME.APPLE },
  { id: 21, name: NAME.GELATINE },
];

export type SecondaryAllergenName = typeof secondaryAllergens[number]['name'];
