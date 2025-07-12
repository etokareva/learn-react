import {Restaurant} from '../../components/restaurant/Restaurant.tsx';
import type {RestaurantPageModel} from '../../models/restaurant-page.model.ts';
import {useActiveRestaurant} from './restaraunt.hook.ts';

export const RestaurantPage = ({restaurants, title}: RestaurantPageModel) => {
    const {activeRestaurant, setActiveId} = useActiveRestaurant(restaurants);

    return (
        <>
            <h1>{title}</h1>
            <div className="restaurant-tabs">
                {restaurants.map((restaurant) => (
                    <button key={restaurant.id}
                            className={`tab-button ${restaurant.id === activeRestaurant.id ? 'active' : ''}`}
                            onClick={() => setActiveId(restaurant.id)}
                    >
                        {restaurant.name}
                    </button>
                ))}
            </div>
            {
                activeRestaurant
                    ? <Restaurant key={activeRestaurant.id} restaurant={activeRestaurant}/>
                    : <div>Ресторан не найден</div>
            }
        </>
    );
};