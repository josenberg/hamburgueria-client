import * as API from '@/api';
import {
  all, put, takeLatest, call,
} from 'redux-saga/effects';

// Actions
import {
  INGREDIENTS_REQUESTED,
  fetchIngredientsFailure,
  fetchIngredientsSuccess,
} from './actions';

export function* fetchIngredients() {
  try {
    const rules = yield call(API.fetchIngredients);

    yield put(fetchIngredientsSuccess(rules));
  } catch (error) {
    yield put(fetchIngredientsFailure(error));
  }
}

function* watchFetchIngredients() {
  yield takeLatest(INGREDIENTS_REQUESTED, fetchIngredients);
}

export default function* watchIngredientsSagas() {
  yield all([
    watchFetchIngredients(),
  ]);
}
