import {useReviewForm} from './review-form.hook';

export const ReviewForm = () => {
    const {
        formState: {name, text, rating},
        setName,
        setText,
        setRating,
        clearForm
    } = useReviewForm();

    return (
        <form>
            <div className="form-group">
                <label>Имя</label>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Текст</label>
                <textarea
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Оценка (1 - 5)</label>
                <input
                    type="number"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={(event) => {
                        const value = parseInt(event.target.value);
                        if (value >= 1 && value <= 5) {
                            setRating(value);
                        }
                    }}
                />
            </div>
            <button
                type="button"
                onClick={clearForm}
            >
                Очистить
            </button>
        </form>
    );
};