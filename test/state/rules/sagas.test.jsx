import 'babel-polyfill';
import { call, put } from 'redux-saga/effects';

import { fetchRules } from '../../../app/state/rules/sagas';
import { fetchRulesSuccess, fetchRulesFailure } from '../../../app/state/rules/actions';
import * as API from '../../../app/api';

describe('Sagas Reducer', () => {
  it('should call the fetchRules and send its results to the fetchRulesSuccess', () => {
    jest.mock('../../../app/api', () => ({
      fetchRules: () => ({
        id: 1,
        type: 'discount_percentage',
        with: [1],
        withoud: [2],
        value: 0.9,
      }),
    }));
    const gen = fetchRules();
    expect(gen.next().value).toEqual(call(API.fetchRules));
    expect(gen.next().value).toEqual(put(fetchRulesSuccess()));
  });

  it('It should call the fetchRulesFailed in case of error', () => {
    jest.mock('../../../app/api', () => {
      throw new Error('Error, error, Errror!');
    });
    const gen = fetchRules();

    expect(gen.next().value).toEqual(call(API.fetchRules));
    expect(gen.throw('Generic error').value)
      .toEqual(put(fetchRulesFailure('Generic error')));
  });
});
