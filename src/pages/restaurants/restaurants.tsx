import {Restaurant} from '../../components/restaurant/restaurant.tsx';
import {Tab} from '../../components/tab/tab.tsx';
import type {RestaurantPageModel} from '../../models/restaurant-page.model.ts';
import {useActiveRestaurant} from './restaraunt.hook.ts';

export const Restaurants = ({restaurants, title}: RestaurantPageModel) => {
    const {activeRestaurant, setActiveRestaurantId} = useActiveRestaurant(restaurants);

    const handleSetActiveRestaurantId = (id: string) => {
        if (activeRestaurant?.id === id) return;

        setActiveRestaurantId(id);
    }

    return (
        <>
            <h1>{title}</h1>
            <div className="restaurant-tabs">
                {restaurants.map(({name, id}) => (
                    <Tab key={id}
                         title={name}
                         onClick={() => handleSetActiveRestaurantId(id)}
                         isActive={id === activeRestaurant?.id}>
                    </Tab>
                ))}
            </div>
            <Restaurant key={activeRestaurant.id}
                        restaurant={activeRestaurant}
            />
        </>
    );
};