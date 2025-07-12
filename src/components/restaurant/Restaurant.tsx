import type {RestaurantModel} from '../../models/restaurant.model.ts';
import {Counter} from '../counter/Counter.tsx';
import {Menu} from '../menu/Menu.tsx';
import {Reviews} from '../reviews/Reviews.tsx';

export const Restaurant = ({restaurant}: {restaurant: RestaurantModel}) => {
    const {name, reviews, menu} = restaurant;

    return (
        <div className="restaurant">
            <h2>{name}</h2>
            <Menu menu={menu}/>
            {reviews?.length ? <Reviews reviews={reviews}/> : <div>Нет отзывов</div>}
            <Counter/>
        </div>
    )
}