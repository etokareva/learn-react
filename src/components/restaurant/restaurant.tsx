import type {RestaurantModel} from '../../models/restaurant.model.ts';
import {Menu} from '../menu/menu';
import {ReviewForm} from '../review-form/review-form';
import {Reviews} from '../reviews/reviews';
import styles from './restaurant.module.css';

export const Restaurant = ({restaurant}: {restaurant: RestaurantModel}) => {
    const {reviews, menu} = restaurant;

    return (
        <div className={styles.restaurant}>
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Меню</h3>
                <Menu menu={menu}/>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Отзывы</h3>
                {reviews?.length ?
                    <Reviews reviews={reviews}/> :
                    <div className={styles.noReviews}>Пока нет отзывов</div>
                }
            </div>

            <div className={styles.reviewFormSection}>
                <h4 className={styles.sectionTitle}>Оставить отзыв</h4>
                <ReviewForm/>
            </div>
        </div>
    );
};