import {Restaurant} from '../../components/restaurant/Restaurant.tsx';
import type {RestaurantModel} from '../../models/restaurant.model.ts';
import type {RestaurantPageModel} from '../../models/restaurant-page.model.ts';

export const RestaurantPage = ({restaurants, title}: RestaurantPageModel) => {
    return (
        <>
            <h1>{title}</h1>
            {restaurants.map((restaurant: RestaurantModel) => (
                <Restaurant key={restaurant.id} restaurant={restaurant}/>
            ))}
        </>
    )
}