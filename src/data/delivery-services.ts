import {
  DeliveryService as Service,
  DeliveryServiceValue as ServiceVal,
  DeliveryServiceIndicator as ServiceIndicator,
  DeliveryServiceURL as ServiceURL,
  DeliveryServiceLogo as ServiceLogo
} from "@/types/delivery-service";

// 宅配サービス情報の配列
export const deliveryServices: any[] = [
  { 
    id: 1,
    title: Service.MobileOrder,
    indicator: ServiceIndicator.MobileOrder,
    url: ServiceURL.MobileOrder,
    logo: ServiceLogo.MobileOrder
  },
  {
    id: 2,
    title: Service.BulkOrder,
    indicator: ServiceIndicator.BulkOrder,
    url: ServiceURL.BulkOrder,
    logo: ServiceLogo.BulkOrder
  },
  {
    id: 3,
    title: Service.CoinLaundry,
    indicator: ServiceIndicator.CoinLaundry,
    value: ServiceVal.CoinLaundry,
    url: ServiceURL.CoinLaundry,
    logo: ServiceLogo.CoinLaundry
  },
  {
    id: 4,
    title: Service.UberEats,
    indicator: ServiceIndicator.UberEats,
    value: ServiceVal.UberEats,
    url: ServiceURL.UberEats,
    logo: ServiceLogo.UberEats
  },
  {
    id: 5,
    title: Service.DemaeKan,
    indicator: ServiceIndicator.DemaeKan,
    value: ServiceVal.DemaeKan,
    url: ServiceURL.DemaeKan,
    logo: ServiceLogo.DemaeKan
  },
  {
    id: 6,
    title: Service.Wolt,
    indicator: ServiceIndicator.Wolt,
    value: ServiceVal.Wolt,
    url: ServiceURL.Wolt,
    logo: ServiceLogo.Wolt
  },
];

export type DeliveryServiceName = typeof deliveryServices[number]['name'];
