import { RestaurantInterface } from 'interfaces/restaurant';
import { ChefInterface } from 'interfaces/chef';
import { GetQueryInterface } from 'interfaces';

export interface MenuInterface {
  id?: string;
  name: string;
  price?: number;
  ingredients?: string;
  preparation_time?: number;
  restaurant_id: string;
  chef_id: string;
  created_at?: any;
  updated_at?: any;

  restaurant?: RestaurantInterface;
  chef?: ChefInterface;
  _count?: {};
}

export interface MenuGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  ingredients?: string;
  restaurant_id?: string;
  chef_id?: string;
}
