import reducer from '../../../app/state/ingredients/reducers';
import {
  INGREDIENTS_REQUESTED,
  INGREDIENTS_SUCCEEDED,
  INGREDIENTS_FAILED,
} from '../../../app/state/ingredients/actions';

describe('Ingredients Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual({
        isLoading: false,
        ingredients: [],
        error: null,
      });
  });

  it('should return loading true when the ingredients are requested', () => {
    expect(reducer(undefined, {
      type: INGREDIENTS_REQUESTED,
    }))
      .toEqual({
        isLoading: true,
        ingredients: [],
        error: null,
      });
  });

  it('should return a error when the ingredients request fail', () => {
    const error = { error: 'FATAL AND CATASTROPHIC error' };
    expect(reducer(undefined, {
      type: INGREDIENTS_FAILED,
      error,
    }))
      .toEqual({
        isLoading: false,
        ingredients: [],
        error,
      });
  });

  it('should return a the menu items when the request is a success', () => {
    const ingredients = [{
      id: 1,
      name: 'alface',
      displayName: 'Alface',
      price: 0.4,
    }];

    expect(reducer(undefined, {
      type: INGREDIENTS_SUCCEEDED,
      ingredients,
    }))
      .toEqual({
        isLoading: false,
        ingredients,
        error: null,
      });
  });
});
