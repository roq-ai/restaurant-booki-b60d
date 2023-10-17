import { RestaurantInterface } from 'interfaces/restaurant';
import { ReservationInterface } from 'interfaces/reservation';
import { GetQueryInterface } from 'interfaces';

export interface TableInterface {
  id?: string;
  number?: number;
  capacity?: number;
  restaurant_id: string;
  reservation_id: string;
  created_at?: any;
  updated_at?: any;

  restaurant?: RestaurantInterface;
  reservation?: ReservationInterface;
  _count?: {};
}

export interface TableGetQueryInterface extends GetQueryInterface {
  id?: string;
  restaurant_id?: string;
  reservation_id?: string;
}
