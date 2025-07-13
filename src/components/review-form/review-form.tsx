import {useReducer} from 'react';
import {CLEAR_FORM_ACTION, SET_NAME_ACTION, SET_RATING_ACTION, SET_TEXT_ACTION} from './review-form.actions.ts';
import {reviewFormReducer} from './review-form.reducer.ts';
import {INITIAL_STATE} from './review-form.state.ts';


export const ReviewForm = () => {
    const [form, dispatch] = useReducer(reviewFormReducer, INITIAL_STATE);
    const {name, text, rating} = form;

    return (
        <form>
            <div className="form-group">
                <label>Имя</label>
                <input type="text"
                       value={name}
                       onChange={(event) => {
                           dispatch({type: SET_NAME_ACTION, payload: event.target.value});
                       }}/>
            </div>
            <div className="form-group">
                <label>Текст</label>
                <textarea value={text}
                          onChange={(event) => {
                              dispatch({type: SET_TEXT_ACTION, payload: event.target.value});
                          }}/>
            </div>
            <div className="form-group">
                <label>Оценка (1 - 5)</label>
                <input type="number"
                       min="1"
                       max="5"
                       value={rating}
                       onChange={(event) => {
                           const value = parseInt(event.target.value);
                           if (value >= 1 && value <= 5) {
                               dispatch({type: SET_RATING_ACTION, payload: value});
                           }
                       }}
                />
            </div>
            <button onClick={() => {
                dispatch({type: CLEAR_FORM_ACTION});
            }}>Очистить
            </button>
        </form>
    )
};