import 'babel-polyfill';
import { call, put } from 'redux-saga/effects';

import { fetchIngredients } from '../../../app/state/ingredients/sagas';
import { fetchIngredientsSuccess, fetchIngredientsFailure } from '../../../app/state/ingredients/actions';
import * as API from '../../../app/api';

describe('Sagas Reducer', () => {
  it('should call the fetchIngredients and send its results to the fetchIngredientsSuccess', () => {
    jest.mock('../../../app/api', () => ({
      fetchIngredients: () => ([{
        id: 1,
        name: 'alface',
        displayName: 'Alface',
        price: 0.4,
      }]),
    }));
    const gen = fetchIngredients();
    expect(gen.next().value).toEqual(call(API.fetchIngredients));
    expect(gen.next().value).toEqual(put(fetchIngredientsSuccess()));
  });

  it('It should call the fetchIngredientsFailed in case of error', () => {
    jest.mock('../../../app/api', () => {
      throw new Error('Error, error, Errror!');
    });
    const gen = fetchIngredients();

    expect(gen.next().value).toEqual(call(API.fetchIngredients));
    expect(gen.throw('Generic error').value)
      .toEqual(put(fetchIngredientsFailure('Generic error')));
  });
});
