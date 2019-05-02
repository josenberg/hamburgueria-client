export const RULES_REQUESTED = 'RULES_REQUESTED';
export const RULES_SUCCEEDED = 'RULES_SUCCEEDED';
export const RULES_FAILED = 'RULES_FAILED';

export const fetchRules = () => ({
  type: RULES_REQUESTED,
});

export const fetchRulesSuccess = rules => ({
  type: RULES_SUCCEEDED,
  rules,
});

export const fetchRulesFailure = error => ({
  type: RULES_FAILED,
  error,
});
