import type {RestaurantModel} from '../../models/restaurant.model.ts';
import {Counter} from '../counter/counter.tsx';
import {Menu} from '../menu/menu.tsx';
import {ReviewForm} from '../review-form/review-form.tsx';
import {Reviews} from '../reviews/reviews.tsx';

export const Restaurant = ({restaurant}: {restaurant: RestaurantModel}) => {
    const {name, reviews, menu} = restaurant;

    return (
        <div className="restaurant">
            <h2>{name}</h2>
            <Menu menu={menu}/>
            {reviews?.length ? <Reviews reviews={reviews}/> : <div>Нет отзывов</div>}
            <ReviewForm />
            <Counter/>
        </div>
    )
}