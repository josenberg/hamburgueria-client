import { all } from 'redux-saga/effects';

// Sagas
import watchMenuSagas from './menu/sagas';

export default function* rootSaga() {
  yield all([
    watchMenuSagas(),
  ]);
}
