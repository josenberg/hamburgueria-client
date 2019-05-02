import {
  RULES_REQUESTED, RULES_SUCCEEDED, RULES_FAILED,
} from './actions';

const initialState = {
  isLoading: false,
  rules: [],
  error: null,
};

export default function rulesReducer(state = initialState, action) {
  switch (action.type) {
    case RULES_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case RULES_SUCCEEDED:
      return {
        ...state,
        rules: action.rules,
        isLoading: false,
        error: null,
      };
    case RULES_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
}
