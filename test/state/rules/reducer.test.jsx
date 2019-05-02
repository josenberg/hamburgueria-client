import reducer from '../../../app/state/rules/reducers';
import {
  RULES_REQUESTED,
  RULES_SUCCEEDED,
  RULES_FAILED,
} from '../../../app/state/rules/actions';

describe('Rules Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual({
        isLoading: false,
        rules: [],
        error: null,
      });
  });

  it('should return loading true when the rules are requested', () => {
    expect(reducer(undefined, {
      type: RULES_REQUESTED,
    }))
      .toEqual({
        isLoading: true,
        rules: [],
        error: null,
      });
  });

  it('should return a error when the rules request fail', () => {
    const error = { error: 'FATAL AND CATASTROPHIC error' };
    expect(reducer(undefined, {
      type: RULES_FAILED,
      error,
    }))
      .toEqual({
        isLoading: false,
        rules: [],
        error,
      });
  });

  it('should return a the rules when the request is a success', () => {
    const rules = [{
      id: 1,
      type: 'discount_percentage',
      with: [1],
      withoud: [2],
      value: 0.9,
    }];

    expect(reducer(undefined, {
      type: RULES_SUCCEEDED,
      rules,
    }))
      .toEqual({
        isLoading: false,
        rules,
        error: null,
      });
  });
});
