import 'babel-polyfill';
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import Header from '../../../app/components/header';
// Redux store


// Configurations for the routes
import configureStore from '../../../app/storeConfig';

// Main Container
const store = configureStore({});

test('Header should render without issues', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Header />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
