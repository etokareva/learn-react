import type {ReviewModel} from '../../models/review.model.ts';
import styles from './reviews.module.css';

export const Reviews = ({reviews}: {reviews: ReviewModel[]}) => {
    if (!reviews.length) {
        return (
            <div className={styles.reviews}>
                <div className={styles.noReviews}>Пока нет отзывов</div>
            </div>
        );
    }

    return (
        <div className={styles.reviews}>
            <ul className={styles.list}>
                {reviews.map(({text, id, user, rating}) => (
                    <li key={id} className={styles.item}>
                        <div className={styles.userRating}>
                            <strong>{user}</strong> - Оценка: {rating}/5
                        </div>
                        <p className={styles.text}>{text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};