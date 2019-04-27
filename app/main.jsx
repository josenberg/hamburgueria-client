import React from 'react';
import ReactDOM from 'react-dom';

// Redux store
import { Provider } from 'react-redux';

// Router
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

// Configurations for the routes
import configureStore, { history } from './storeConfig';

// Main Container
import Container from './pages';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={Container} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
);
