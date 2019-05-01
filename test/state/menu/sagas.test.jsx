import 'babel-polyfill';
import { call, put } from 'redux-saga/effects';

import { fetchMenu } from '../../../app/state/menu/sagas';
import {fetchMenuSuccess, fetchMenuFailure } from '../../../app/state/menu/actions';
import * as API from '../../../app/api';

describe('Sagas Reducer', () => {
  it('should call the fetchMenu and send its results to the fetchMenuSuccess', () => {
    jest.mock('../../../app/api', () => ({
      fetchMenu: () => ([{
        id: 1,
        name: 'xbacon',
        displayName: 'X-Bacon',
        ingredients: [2, 3, 5],
      }]),
    }));
    const gen = fetchMenu();
    expect(gen.next().value).toEqual(call(API.fetchMenu));
    expect(gen.next().value).toEqual(put(fetchMenuSuccess()));
  });

  it('It should call the fetchMenuFailed in case of error', () => {
    jest.mock('../../../app/api', () => {
      throw new Error('Error, error, Errror!');
    });
    const gen = fetchMenu();

    expect(gen.next().value).toEqual(call(API.fetchMenu));
    expect(gen.throw('Generic error').value)
      .toEqual(put(fetchMenuFailure('Generic error')));
  });
});
