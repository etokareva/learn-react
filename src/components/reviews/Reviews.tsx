import type {ReviewModel} from '../../models/review.model.ts';

export const Reviews = ({reviews}: {reviews: ReviewModel[]}) => {

    return (
        <div className="reviews">
            <h3>Отзывы</h3>
            <ul>
                {reviews.map(({text}) => (
                    <li key={text}>{text}</li>
                ))}
            </ul>
        </div>
    )
}