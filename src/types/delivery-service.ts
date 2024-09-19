export interface Service {
  id: number;
  title: string;
  indicator: string;
  logo: string;
  value?: string;
  url?: string;
}

export enum DeliveryService {
  MobileOrder='モバイルオーダー',
  BulkOrder='10個以上のご注文で宅配',
  CoinLaundry ='コインランドリー',
  UberEats='Uber Eatsで注文',
  DemaeKan = '出前館で注文',
  Wolt = 'Woltで注文',
}

export enum DeliveryServiceValue {
  MobileOrder='mobile',
  BulkOrder='bulk-order',
  CoinLaundry ='coin-laundry',
  UberEats='uber-eats',
  DemaeKan = 'demaekan',
  Wolt = 'wolt',
}

export enum DeliveryServiceIndicator {
  MobileOrder='MobileOrderIndicator',
  BulkOrder='BulkOrderIndicator',
  CoinLaundry ='CoinLaundryIndicator',
  UberEats='UberEatsIndicator',
  DemaeKan = 'DemaeKanIndicator',
  Wolt = 'WoltIndicator',
}

export enum DeliveryServiceLogo {
  MobileOrder='MobileOrderIcon',
  BulkOrder='BulkOrderIcon',
  CoinLaundry ='CoinLaundryIcon',
  UberEats='UberEatsIcon',
  DemaeKan = 'DemaeKanIcon',
  Wolt = 'WoltIcon',
}

export enum DeliveryServiceURL {
  MobileOrder='',
  BulkOrder='https://hokkahokka.com/',
  CoinLaundry ='https://www.washandshine.jp/',
  UberEats='https://www.ubereats.com/',
  DemaeKan = 'https://demae-can.com/',
  Wolt = 'https://wolt.com/ja/jpn',
}
