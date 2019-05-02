import React from 'react';
import PropTypes from 'prop-types';

import PlusIcon from './plusIcon';
import MinusIcon from './minusIcon';

import * as styles from './styles';

export const getButtonContent = (type, label) => {
  if (type === 'plus') {
    return <PlusIcon label={label} />;
  }

  if (type === 'minus') {
    return <MinusIcon label={label} />;
  }

  return label;
};

export const getButtonStyle = (type) => {
  if (type === 'primary') {
    return styles.primaryButton;
  }

  if (type === 'cancel') {
    return styles.cancelButton;
  }

  if (type === 'plus' || type === 'minus') {
    return styles.iconButton;
  }

  return {};
};

const Button = ({ type, onClickAction, label }) => (
  <button onClick={onClickAction} type="submit" style={getButtonStyle(type)}>
    {getButtonContent(type, label)}
  </button>
);

Button.defaultProps = {
  type: 'regular',
  onClickAction: () => {},
  label: '',
};

Button.propTypes = {
  type: PropTypes.string,
  onClickAction: PropTypes.func,
  label: PropTypes.string,
};

export default Button;
