import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@/components/grid';
import Button from '@/components/button';

import { calculatePrice, formatCurrency } from '@/utilities/price';

import * as styles from './style';

const getQuantityByIngredient = (item, id) => {
  const itemIngredient = item.ingredients.find(({ id: ingredientId }) => ingredientId === id);
  if (itemIngredient) {
    return itemIngredient.quantity;
  }
  return 0;
};

const IngredientsPicker = ({
  item,
  rules,
  ingredients,
  updateItem,
}) => (
  <Grid columns="1fr auto auto" rows="auto auto">
    <Grid.Cell row="1">
      <h3 style={styles.title}> Escolha os Ingredientes do seu lanche </h3>
    </Grid.Cell>
    <Grid.Cell row="2">
      <Grid rows={'auto'.repeat(ingredients.length)} columns="auto 40px 40px 40px" rowGap="10px">
        {ingredients.map(({ displayName, id }, index) => (
          <React.Fragment key={`rule-${id}`}>
            <Grid.Cell column="1" row={`${index + 1}`} key={`rule-${id}-name`}>
              {displayName}
            </Grid.Cell>
            <Grid.Cell column="2" row={`${index + 1}`} key={`rule-${id}-minus`}>
              <Button
                type="minus"
                onClickAction={() => updateItem(id, getQuantityByIngredient(item, id) - 1)}
              />
            </Grid.Cell>
            <Grid.Cell column="3" row={`${index + 1}`} key={`rule-${id}-quantity`} style={styles.quantityContainer}>
              {getQuantityByIngredient(item, id)}
            </Grid.Cell>
            <Grid.Cell column="4" row={`${index + 1}`} key={`rule-${id}-plus`}>
              <Button
                type="plus"
                onClickAction={() => updateItem(id, getQuantityByIngredient(item, id) + 1)}
              />
            </Grid.Cell>
          </React.Fragment>
        ))}
      </Grid>
    </Grid.Cell>
    <Grid.Cell row="3">
      <p style={styles.price}>
        {formatCurrency(calculatePrice(item.ingredients, rules))}
      </p>
    </Grid.Cell>
  </Grid>
);

IngredientsPicker.defaultProps = {
  ingredients: [],
  item: {},
  rules: []
};

IngredientsPicker.propTypes = {
  ingredients: PropTypes.array,
  item: PropTypes.object,
  rules: PropTypes.array,
  updateItem: PropTypes.func.isRequired,
};

export default IngredientsPicker;
