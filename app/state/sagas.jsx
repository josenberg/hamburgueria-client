import { all } from 'redux-saga/effects';

import watchMenuSagas from './menu/sagas';
import watchRulesSagas from './rules/sagas';

export default function* watchRootSagas() {
  yield all([
    watchMenuSagas(),
    watchRulesSagas(),
  ]);
}
