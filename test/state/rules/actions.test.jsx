import {
  fetchRules,
  fetchRulesSuccess,
  fetchRulesFailure,
  RULES_REQUESTED,
  RULES_SUCCEEDED,
  RULES_FAILED,
} from '../../../app/state/rules/actions';

describe('Rules Actions', () => {
  it('should create an action to fetch the Rules', () => {
    const expectedAction = {
      type: RULES_REQUESTED,
    };
    expect(fetchRules()).toEqual(expectedAction);
  });

  it('should create an action for when the fetch succeded', () => {
    const rules = [{
      id: 1,
      type: 'discount_percentage',
      with: [1],
      withoud: [2],
      value: 0.9,
    }];

    const expectedAction = {
      type: RULES_SUCCEEDED,
      rules,
    };
    expect(fetchRulesSuccess(rules)).toEqual(expectedAction);
  });

  it('should create an action for when the fetch fail', () => {
    const error = { error: 'FATAL AND CATASTROPHIC error' };
    const expectedAction = {
      type: RULES_FAILED,
      error,
    };
    expect(fetchRulesFailure(error)).toEqual(expectedAction);
  });
});
