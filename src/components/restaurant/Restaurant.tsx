import type {RestaurantModel} from '../../models/restaurant.model.ts';
import {Counter} from '../Counter/Counter.tsx';
import {Menu} from '../menu/Menu.tsx';
import {Reviews} from '../reviews/Reviews.tsx';

export const Restaurant = ({restaurant}: {restaurant: RestaurantModel}) => {
    const {id, name, reviews, menu} = restaurant;

    return (
        <div className="restaurant" key={id}>
            <h2>{name}</h2>
            <Menu menu={menu} key={id} />
            {reviews?.length ? <Reviews reviews={reviews} key={id} /> : <div>Нет отзывов</div>}
            <Counter />
        </div>
    )
}