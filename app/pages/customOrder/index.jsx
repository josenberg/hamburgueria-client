import { connect } from 'react-redux';
import React from 'react';

import { push } from 'connected-react-router';
import PropTypes from 'prop-types';

import { FOOD_MENU } from '@/constants/routes';

const CustomOrder = props => (
  <div>
    <h1> Custom Order </h1>
    <a onClick={() => props.push(FOOD_MENU)} href={FOOD_MENU}> Custom Order </a>
  </div>
);

CustomOrder.propTypes = {
  push: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  push,
};

export default connect(null, mapDispatchToProps)(CustomOrder);
