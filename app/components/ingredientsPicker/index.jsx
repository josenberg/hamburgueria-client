import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'ramda';

import Grid from '@/components/grid';
import Button from '@/components/button';

import { calculatePrice, formatCurrency } from '@/utilities/price';

import * as styles from './style';

const getQuantityOfAllIngredients = item => (
  item.ingredients.reduce((total, { quantity }) => total + quantity, 0)
);

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
  onRefuse,
  onAccept,
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
    <Grid.Cell row="4">
      <Grid rows="auto" columns="1fr 1fr" columnGap="20px">
        <Grid.Cell row="1" column="1">
          {onRefuse ? (
            <Button
              onClickAction={onRefuse}
              type="cancel"
              label="Cancel"
            />
          ) : null}
        </Grid.Cell>
        <Grid.Cell row="1" column="2">
          {onAccept ? (
            <Button
              onClickAction={() => (getQuantityOfAllIngredients(item) > 0 ? onAccept() : null)}
              type="primary"
              label="Add To Cart"
            />
          ) : null}
        </Grid.Cell>
      </Grid>
    </Grid.Cell>
  </Grid>
);

IngredientsPicker.defaultProps = {
  ingredients: [],
  item: {},
  rules: [],
  onRefuse: null,
  onAccept: null,
};

IngredientsPicker.propTypes = {
  ingredients: PropTypes.array,
  item: PropTypes.object,
  rules: PropTypes.array,
  onRefuse: PropTypes.func,
  onAccept: PropTypes.func,
  updateItem: PropTypes.func.isRequired,
};

export default IngredientsPicker;
