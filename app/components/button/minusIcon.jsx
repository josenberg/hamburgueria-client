import React from 'react';
import PropTypes from 'prop-types';

import minusIconImage from './images/minus.png';

const MinusIcon = ({ label }) => <img src={minusIconImage} alt={label} />;

MinusIcon.defaultProps = {
  label: PropTypes.string,
};

MinusIcon.propTypes = {
  label: PropTypes.string,
};

export default MinusIcon;
