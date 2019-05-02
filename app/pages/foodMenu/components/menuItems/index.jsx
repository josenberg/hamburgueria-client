import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from './menuItem';

const MenuItems = ({ items, rules }) => (
  items.map(({ displayName, ingredients, name }) => (
    <MenuItem
      key={name}
      displayName={displayName}
      ingredients={ingredients}
      rules={rules}
    />
  ))
);

MenuItems.propTypes = {
  items: PropTypes.array,
  rules: PropTypes.array,
};

export default MenuItems;
