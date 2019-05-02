import React from 'react';
import PropTypes from 'prop-types';

import PlusIconImage from './images/plus.png';

const PlusIcon = ({ label }) => <img src={PlusIconImage} alt={label} />;

PlusIcon.defaultProps = {
  label: PropTypes.string,
};

PlusIcon.propTypes = {
  label: PropTypes.string,
};

export default PlusIcon;
