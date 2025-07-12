import type {ReviewModel} from '../../models/review.model.ts';

export const Reviews = ({reviews, id}: {reviews: ReviewModel[], id: string}) => {

    return (
        <div className="reviews" key={id}>
            <h3>Отзывы</h3>
            <ul>
                {reviews.map(({text}) => (
                    <li key={text}>{text}</li>
                ))}
            </ul>
        </div>
    )
}