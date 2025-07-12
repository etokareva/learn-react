import type {ReviewModel} from '../../models/review.model.ts';

export const Reviews = ({reviews}: {reviews: ReviewModel[]}) => {

    return (
        <div className="reviews">
            <h3>Отзывы</h3>
            <ul>
                {reviews.map(({text, id}) => (
                    <li key={id}>{text}</li>
                ))}
            </ul>
        </div>
    )
}