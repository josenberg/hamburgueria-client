import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import MenuReducers from './menu/reducers';

export default history => combineReducers({
  router: connectRouter(history),
  menu: MenuReducers,
});
