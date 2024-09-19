export interface Menu {
  id: string;
  name: string;
  desc: string;
  price: number;
  taxIncludedPrice: number;
  images: string[];
  allergens: number[];
  secondaryAllergens: number[];
  isNew: boolean;
  category: string;
  isSideAloneOK: boolean;
  isRiceReplacementOK: boolean;
  nutrition: {
    energy: number;
    protein: number;
    fat: number;
    carbohydrate: number;
    salt: number;
  }
}
