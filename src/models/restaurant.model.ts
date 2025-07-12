import type {MenuItemModel} from './menu-item.model.ts';
import type {ReviewModel} from './review.model.ts';

export interface RestaurantModel {
    id: string;
    name: string;
    menu: MenuItemModel[];
    reviews: ReviewModel[];
}