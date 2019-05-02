import {
  addToCart,
  removeFromCart,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from '../../../app/state/cart/actions';

describe('Cart Actions', () => {
  it('should add a item to the cart', () => {
    const expectedAction = {
      type: ADD_TO_CART,
      item: { id: 1 },
    };
    expect(addToCart({ id: 1 })).toEqual(expectedAction);
  });

  it('should remvoe a item from the cart', () => {
    const expectedAction = {
      type: REMOVE_FROM_CART,
      id: 1,
    };
    expect(removeFromCart(1)).toEqual(expectedAction);
  });
});
