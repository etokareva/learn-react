import {
    CLEAR_FORM_ACTION,
    type ReviewFormAction,
    SET_NAME_ACTION,
    SET_RATING_ACTION,
    SET_TEXT_ACTION
} from './review-form.actions.ts';
import {INITIAL_STATE, type ReviewFormState} from './review-form.state.ts';

export const reviewFormReducer = (state: ReviewFormState, {type, payload}: ReviewFormAction): ReviewFormState => {
    switch (type) {
        case SET_NAME_ACTION:
            return {...INITIAL_STATE, name: payload};

        case SET_TEXT_ACTION:
            return {...state, text: payload};

        case SET_RATING_ACTION:
            return {...state, rating: payload};

        case CLEAR_FORM_ACTION:
            return {...INITIAL_STATE};

        default:
            return state;
    }
}