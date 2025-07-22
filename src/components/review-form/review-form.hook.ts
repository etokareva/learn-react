import {useReducer} from 'react';
import {
    CLEAR_FORM_ACTION,
    type ReviewFormAction,
    SET_NAME_ACTION,
    SET_RATING_ACTION,
    SET_TEXT_ACTION
} from './review-form.actions';
import {INITIAL_STATE, type ReviewFormState} from './review-form.state';

const reviewFormReducer = (
    state: ReviewFormState,
    action: ReviewFormAction
): ReviewFormState => {
    switch (action.type) {
        case SET_NAME_ACTION:
            return {...INITIAL_STATE, name: action.payload};
        case SET_TEXT_ACTION:
            return {...state, text: action.payload};
        case SET_RATING_ACTION:
            return {...state, rating: action.payload};
        case CLEAR_FORM_ACTION:
            return {...INITIAL_STATE};
        default:
            return state;
    }
};

export const useReviewForm = () => {
    const [formState, dispatch] = useReducer(reviewFormReducer, INITIAL_STATE);

    const setName = (name: string) => {
        dispatch({type: SET_NAME_ACTION, payload: name});
    };

    const setText = (text: string) => {
        dispatch({type: SET_TEXT_ACTION, payload: text});
    };

    const setRating = (rating: number) => {
        dispatch({type: SET_RATING_ACTION, payload: rating});
    };

    const clearForm = () => {
        dispatch({type: CLEAR_FORM_ACTION});
    };

    return {
        formState,
        setName,
        setText,
        setRating,
        clearForm
    };
};