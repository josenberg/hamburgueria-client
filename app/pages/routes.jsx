import React from 'react';
import { Route, Switch } from 'react-router';

import { CUSTOM_ORDER } from '~/constants/routes';

import FoodMenu from './foodMenu';
import CustomOrder from './customOrder';

const routes = () => (
  <Switch>
    <Route path={CUSTOM_ORDER} component={CustomOrder} />
    <Route path="/" component={FoodMenu} />
  </Switch>
);

export default routes;
