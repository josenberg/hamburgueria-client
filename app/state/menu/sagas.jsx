import * as API from '@/api';
import {
  all, put, takeLatest, call,
} from 'redux-saga/effects';

// Actions
import {
  MENU_REQUESTED,
  fetchMenuFailure,
  fetchMenuSuccess,
} from './actions';

export function* fetchMenu() {
  try {
    const menuItems = yield call(API.fetchMenu);

    yield put(fetchMenuSuccess(menuItems));
  } catch (error) {
    yield put(fetchMenuFailure(error));
  }
}

function* watchFetchMenu() {
  yield takeLatest(MENU_REQUESTED, fetchMenu);
}

export default function* watchMenuSagas() {
  yield all([
    watchFetchMenu(),
  ]);
}
