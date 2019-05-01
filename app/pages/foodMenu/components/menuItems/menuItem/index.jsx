import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@/components/grid';

import * as styles from './style';

import BurgerImage from './images/burger.png';
import PlusImage from './images/plus.png';

export const formatIngredientsList = ingredients => (
  ingredients.reduce((result, { displayName }, idx) => {
    if (ingredients.length === 1 || idx === 0) {
      return displayName;
    }

    if (ingredients.length - 1 === idx) {
      return `${result} e ${displayName}`;
    }
    return `${result}, ${displayName}`;
  }, '')
);

const MenuItem = ({ displayName, ingredients }) => (
  <Grid columns="1fr" rows="auto auto">
    <Grid.Cell>
      <Grid columns="100px 280px auto" rows="1" style={styles.burgersContainer}>
        <Grid.Cell column="1" row="1">
          <img src={BurgerImage} alt="burger" style={styles.burgerImage} />
        </Grid.Cell>
        <Grid.Cell column="2" row="1">
          <h2 style={styles.burgerName}>
            {displayName}
          </h2>
          <p style={styles.burgerDescription}>
            {formatIngredientsList(ingredients)}
          </p>
          <p style={styles.burgerPrice}>
            R$ 20,00
          </p>
        </Grid.Cell>
        <Grid.Cell column="3" row="1" style={styles.iconContainer}>
          <img src={PlusImage} alt="Add to cart" />
        </Grid.Cell>
      </Grid>
    </Grid.Cell>
  </Grid>
);

MenuItem.defaultProps = {
  displayName: '',
  ingredients: [],
};

MenuItem.propTypes = {
  displayName: PropTypes.string,
  ingredients: PropTypes.array,
};

export default MenuItem;
