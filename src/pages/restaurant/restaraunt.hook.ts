import {useState} from 'react';
import type {RestaurantModel} from '../models/restaurant.model.ts';

export const useActiveRestaurant = (restaurants: RestaurantModel[]) => {
    const [activeId, setActiveId] = useState(restaurants[0]?.id || null);

    const activeRestaurant = restaurants.find((restaraunt) => restaraunt.id === activeId);

    return {
        activeRestaurant,
        setActiveId
    };
};