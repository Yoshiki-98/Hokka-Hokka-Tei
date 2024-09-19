import { Service } from "src/types/delivery-service";

export interface Store {
  id: string;
  name: string;
  desc: string;
  comment: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  }
  hours: string;
  phone: string;
  businessHours: string;
  deliveryHours: string;
  prefCode: number;
  cityCode: number;
  deliveryServices: Service[];
}
