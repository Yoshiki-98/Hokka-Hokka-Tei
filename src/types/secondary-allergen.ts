// 特定原材料に準ずるもの20品目

export interface SecondaryAllergen {
  id: number;
  name: string;
}

// 以下では SecondaryAllergenName の型がないが、基本的に enum で十分
export enum SecondaryAllergenName {
  ABALONE = 'あわび',
  SQUID = 'いか',
  SALMON_ROE = 'いくら',
  ALMOND = 'アーモンド',
  ORANGE = 'オレンジ',
  CASHEW_NUT = 'カシューナッツ',
  KIWI_FRUIT = 'キウイフルーツ',
  BEEF = '牛肉',
  WALNUT = 'くるみ',
  SESAME = 'ごま',
  SALMON = '鮭',
  MACKEREL = '鯖',
  SOYBEAN = '大豆',
  CHICKEN = '鶏肉',
  BANANA = 'バナナ',
  PORK = '豚肉',
  MATSUTAKE_MUSHROOM = 'まつたけ',
  PEACH = 'もも',
  JAPANESE_YAM = 'やまいも',
  APPLE = 'りんご',
  GELATINE = 'ゼラチン',
}
