import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import MenuReducers from './menu/reducers';
import RulesReducer from './rules/reducers';
import IngredientsReducer from './ingredients/reducers';
import CartReducer from './cart/reducers';

export default history => combineReducers({
  router: connectRouter(history),
  menu: MenuReducers,
  rules: RulesReducer,
  ingredients: IngredientsReducer,
  cart: CartReducer,
});
