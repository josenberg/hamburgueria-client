import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from './menuItem';

const MenuItems = ({ items, rules, addToCart }) => (
  items.map(item => (
    <MenuItem
      key={item.name}
      item={item}
      rules={rules}
      addToCart={addToCart}
    />
  ))
);

MenuItems.propTypes = {
  items: PropTypes.array,
  rules: PropTypes.array,
  addToCart: PropTypes.func.isRequired,
};

export default MenuItems;
