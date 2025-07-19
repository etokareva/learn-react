export const SET_NAME_ACTION = 'setName';
export const SET_TEXT_ACTION = 'setAddress';
export const SET_RATING_ACTION = 'setReview';
export const CLEAR_FORM_ACTION = 'clearForm';

export type ReviewFormAction =
    | {type: typeof SET_NAME_ACTION; payload: string}
    | {type: typeof SET_TEXT_ACTION; payload: string}
    | {type: typeof SET_RATING_ACTION; payload: number}
    | {type: typeof CLEAR_FORM_ACTION; payload?: string};