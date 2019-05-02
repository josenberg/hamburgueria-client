import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@/components/grid';
import Button from '@/components/button';

import { calculatePrice, formatCurrency } from '@/utilities/price';

import * as styles from './style';

import BurgerImage from './images/burger.png';

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

const MenuItem = ({ item, rules, addToCart }) => (
  <Grid columns="1fr" rows="auto auto">
    <Grid.Cell>
      <Grid columns="100px 280px auto" rows="1" style={styles.burgersContainer}>
        <Grid.Cell column="1" row="1">
          <img src={BurgerImage} alt="burger" style={styles.burgerImage} />
        </Grid.Cell>
        <Grid.Cell column="2" row="1">
          <h2 style={styles.burgerName}>
            {item.displayName}
          </h2>
          <p style={styles.burgerDescription}>
            {formatIngredientsList(item.ingredients)}
          </p>
          <p style={styles.burgerPrice}>
            {`${formatCurrency(calculatePrice(item.ingredients, rules))}`}
          </p>
        </Grid.Cell>
        <Grid.Cell column="3" row="1">
          <Button
            onClickAction={() => addToCart(item)}
            type="plus"
          />
        </Grid.Cell>
      </Grid>
    </Grid.Cell>
  </Grid>
);

MenuItem.defaultProps = {
  displayName: '',
  ingredients: [],
  rules: [],
};

MenuItem.propTypes = {
  item: PropTypes.object,
  rules: PropTypes.array,
  addToCart: PropTypes.func.isRequired,
};

export default MenuItem;
