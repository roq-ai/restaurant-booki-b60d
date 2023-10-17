import { MenuInterface } from 'interfaces/menu';
import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface ChefInterface {
  id?: string;
  specialty?: string;
  experience_years?: number;
  user_id: string;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;
  menu?: MenuInterface[];
  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {
    menu?: number;
  };
}

export interface ChefGetQueryInterface extends GetQueryInterface {
  id?: string;
  specialty?: string;
  user_id?: string;
  restaurant_id?: string;
}
