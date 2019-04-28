import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';

import { CUSTOM_ORDER } from '@/constants/routes';

const FoodMenu = props => (
  <div>
    <h1> Food </h1>
    <a onClick={() => props.push(CUSTOM_ORDER)} href={CUSTOM_ORDER}> Custom Order </a>
  </div>
);

FoodMenu.propTypes = {
  push: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  push,
};

export default connect(null, mapDispatchToProps)(FoodMenu);
