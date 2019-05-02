import * as API from '@/api';
import {
  all, put, takeLatest, call,
} from 'redux-saga/effects';

// Actions
import {
  RULES_REQUESTED,
  fetchRulesFailure,
  fetchRulesSuccess,
} from './actions';

export function* fetchRules() {
  try {
    const rules = yield call(API.fetchRules);

    yield put(fetchRulesSuccess(rules));
  } catch (error) {
    yield put(fetchRulesFailure(error));
  }
}

function* watchFetchRules() {
  yield takeLatest(RULES_REQUESTED, fetchRules);
}

export default function* watchRulesSagas() {
  yield all([
    watchFetchRules(),
  ]);
}
