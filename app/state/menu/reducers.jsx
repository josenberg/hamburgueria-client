import {
  MENU_REQUESTED, MENU_SUCCEEDED, MENU_FAILED,
} from './actions';

const initialState = {
  isLoading: false,
  menuItems: [],
  error: null,
};

export default function menuReducer(state = initialState, action) {
  switch (action.type) {
    case MENU_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case MENU_SUCCEEDED:
      return {
        ...state,
        menuItems: action.menuItems,
        isLoading: false,
        error: null,
      };
    case MENU_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
}
