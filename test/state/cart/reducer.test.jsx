import reducer from '../../../app/state/cart/reducers';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from '../../../app/state/cart/actions';

describe('Cart Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual({
        cart: [],
        error: null,
      });
  });

  it('should add a item to the cart', () => {
    expect(reducer(undefined, {
      type: ADD_TO_CART,
      item: { id: 1 },
    }))
      .toEqual({
        cart: [{ id: 1 }],
        error: null,
      });
  });

  it('should remove one item from the cart', () => {
    expect(reducer({ cart: [{ id: 1 }], error: 'null' }, {
      type: REMOVE_FROM_CART,
      id: 1,
    }))
      .toEqual({
        cart: [],
        error: null,
      });
  });
});
