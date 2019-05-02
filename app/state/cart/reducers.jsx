import {
  ADD_TO_CART, REMOVE_FROM_CART,
} from './actions';

const initialState = {
  cart: [],
  error: null,
};

export const removeItemFromCartById = (cart, id) => (
  cart.filter(cartItem => cartItem.id !== id)
);

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.item],
        error: null,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: removeItemFromCartById(state.cart, action.id),
        error: null,
      };
    default:
      return state;
  }
}