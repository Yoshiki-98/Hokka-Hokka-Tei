// 特定原材料7品目（えび、かに、小麦、そば、卵、乳、落花生）+ くるみ
export interface Allergen {
  id: number;
  name: string;
  nameEn: string;
  icon: string;
}

// 以下では AllergenName の型がないが、基本的に enum で十分
export enum AllergenName {
  WHEAT = '小麦',
  BUCKWHEAT = 'そば',
  EGG = '卵',
  MILK = '乳',
  PEANUT = '落花生',
  WALNUT = 'くるみ',
  SHRIMP = 'えび',
  CRAB = 'かに'
}

// 以下では AllergenNameEn の型がないが、基本的に enum で十分
export enum AllergenNameEn {
  WHEAT = 'wheat',
  BUCKWHEAT = 'buckwheat',
  EGG = 'egg',
  MILK = 'milk',
  PEANUT = 'peanut',
  WALNUT = 'walnut',
  SHRIMP = 'shrimp',
  CRAB = 'crab'
}

// 以下では AllergenIcon の型がないが、基本的に enum で十分
export enum AllergenIcon {
  WHEAT = 'WheatIcon',
  BUCKWHEAT = 'BuckWheatIcon',
  EGG = 'EggIcon',
  MILK = 'MilkIcon',
  PEANUT = 'PeanutIcon',
  WALNUT = 'WalnutIcon',
  SHRIMP = 'ShrimpIcon',
  CRAB = 'CrabIcon'
}
