import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from './menuItem';

const MenuItems = ({ items }) => (
  items.map(({ displayName, ingredients, name }) => (
    <MenuItem
      key={name}
      displayName={displayName}
      ingredients={ingredients}
    />
  ))
);

MenuItems.propTypes = {
  items: PropTypes.array,
};

export default MenuItems;
