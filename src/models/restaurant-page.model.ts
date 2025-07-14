import type {RestaurantModel} from './restaurant.model.ts';

export interface RestaurantPageModel {
    restaurants: RestaurantModel[];
    title: string
};