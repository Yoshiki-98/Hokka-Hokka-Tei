
import { Service } from '@/types/delivery-service';
import { deliveryServices } from 'src/data/delivery-services';

export function getDeliveryServiceDataById(serviceId: Service): Service | undefined {
  return deliveryServices.find(service => service.id === serviceId);
}
