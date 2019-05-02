import {
  INGREDIENTS_REQUESTED, INGREDIENTS_SUCCEEDED, INGREDIENTS_FAILED,
} from './actions';

const initialState = {
  isLoading: false,
  ingredients: [],
  error: null,
};

export default function ingredientsReducer(state = initialState, action) {
  switch (action.type) {
    case INGREDIENTS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case INGREDIENTS_SUCCEEDED:
      return {
        ...state,
        ingredients: action.ingredients,
        isLoading: false,
        error: null,
      };
    case INGREDIENTS_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
}
