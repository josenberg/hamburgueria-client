import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCartCount } from '@/state/cart/selectors';

import CartImage from './images/cart_icon.png';

import * as styles from './style';

const CartIcon = ({
  cartCount,
}) => (
  <div>
    <img src={CartImage} alt="Your shopping cart" />
    {cartCount > 0 ? (
      <span style={styles.countContainer}>
        {cartCount}
      </span>
    ) : null}
  </div>
);

CartIcon.defaultProps = {
  cartCount: 0,
};

CartIcon.propTypes = {
  cartCount: PropTypes.number,
};

const mapStateToProps = state => ({
  cartCount: getCartCount(state),
});

export default connect(mapStateToProps)(CartIcon);
