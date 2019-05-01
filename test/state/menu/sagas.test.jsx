import 'babel-polyfill';
import { call, put } from 'redux-saga/effects';

import { fetchMenu } from '../../../app/state/menu/sagas';
import { fetchMenuSuccess } from '../../../app/state/menu/actions';
import * as API from '../../../app/api';

jest.mock('../../../app/api', () => ({
  fetchMenu: () => ([{
    id: 1,
    name: 'xbacon',
    displayName: 'X-Bacon',
    ingredients: [2, 3, 5],
  }]),
}));

describe('Sagas Reducer', () => {
  it('should return the initial state', () => {
    const gen = fetchMenu();
    expect(gen.next().value).toEqual(call(API.fetchMenu));
    expect(gen.next().value).toEqual(put(fetchMenuSuccess()));
  });
});
