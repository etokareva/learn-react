import {useState} from 'react';
import type {RestaurantModel} from '../../models/restaurant.model.ts';

export const useActiveRestaurant = (restaurants: RestaurantModel[]) => {
    const [activeId, setActiveRestaurantId] = useState(restaurants[0]?.id || null);

    const activeRestaurant = restaurants.find(({id}) => id === activeId);

    return {
        activeRestaurant,
        setActiveRestaurantId
    };
};