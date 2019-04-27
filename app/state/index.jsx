import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default history => combineReducers({
  router: connectRouter(history),
  root: rootReducer,
});
