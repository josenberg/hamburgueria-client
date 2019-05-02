import {
  fetchIngredients,
  fetchIngredientsSuccess,
  fetchIngredientsFailure,
  INGREDIENTS_REQUESTED,
  INGREDIENTS_SUCCEEDED,
  INGREDIENTS_FAILED,
} from '../../../app/state/ingredients/actions';

describe('Ingredients Actions', () => {
  it('should create an action to fetch the ingredients', () => {
    const expectedAction = {
      type: INGREDIENTS_REQUESTED,
    };
    expect(fetchIngredients()).toEqual(expectedAction);
  });

  it('should create an action for when the fetch succeded', () => {
    const ingredients = [{
      id: 1,
      name: 'alface',
      displayName: 'Alface',
      price: 0.4,
    }];

    const expectedAction = {
      type: INGREDIENTS_SUCCEEDED,
      ingredients,
    };
    expect(fetchIngredientsSuccess(ingredients)).toEqual(expectedAction);
  });

  it('should create an action for when the fetch fail', () => {
    const error = { error: 'FATAL AND CATASTROPHIC error' };
    const expectedAction = {
      type: INGREDIENTS_FAILED,
      error,
    };
    expect(fetchIngredientsFailure(error)).toEqual(expectedAction);
  });
});
