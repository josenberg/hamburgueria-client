import { all } from 'redux-saga/effects';

import watchMenuSagas from './menu/sagas';
import watchRulesSagas from './rules/sagas';
import watchIngredientsSagas from './ingredients/sagas';

export default function* watchRootSagas() {
  yield all([
    watchMenuSagas(),
    watchRulesSagas(),
    watchIngredientsSagas(),
  ]);
}
