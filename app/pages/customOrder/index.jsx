import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';

import { FOOD_MENU } from '@/constants/routes';
import Grid from '@/components/grid';
import TitleContainer from '@/components/titleContainer';

import { getRules } from '@/state/rules/selectors';
import { fetchRules } from '@/state/rules/actions';

import { getIngredients } from '@/state/ingredients/selectors';
import { fetchIngredients } from '@/state/ingredients/actions';

import { addToCart } from '@/state/cart/actions';

import { updateItemIngredientQuantity } from '@/utilities/order';

import Promotions from '@/components/promotions';
import IngredientsPicker from '@/components/ingredientsPicker';

import * as styles from './style';

const CustomOrder = (props) => {
  useEffect(() => {
    props.fetchRules();
    props.fetchIngredients();
  }, []);

  const initialState = { item: { ingredients: [] } };
  const [state, setState] = useState(initialState);

  const { rules, ingredients } = props;

  return (
    <Grid columns="1fr" rows="auto auto auto" style={styles.container}>
      <Grid.Cell row="1">
        <TitleContainer
          title="Custom Order"
          subtitle="Go to Menu"
          subtitleAction={() => props.push(FOOD_MENU)}
          subtitleTarget={FOOD_MENU}
        />
      </Grid.Cell>
      <Grid.Cell style={styles.menuItemsContainer}>
        <IngredientsPicker
          ingredients={ingredients}
          item={state.item}
          rules={rules}
          updateItem={(ingredientId, quantity) => {
            updateItemIngredientQuantity(
              item => setState({ item }), ingredients, state.item, ingredientId, quantity,
            );
          }}
          onAccept={(item) => {
            props.addToCart(item);
            setState(initialState);
          }}
        />
      </Grid.Cell>
      <Grid.Cell style={styles.menuItemsContainer}>
        <Promotions rules={rules} />
      </Grid.Cell>
    </Grid>
  );
};

CustomOrder.propTypes = {
  push: PropTypes.func.isRequired,
  fetchRules: PropTypes.func.isRequired,
  fetchIngredients: PropTypes.func.isRequired,
  rules: PropTypes.array,
  ingredients: PropTypes.array,
  addToCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  push,
  fetchRules,
  fetchIngredients,
  addToCart,
};

const mapStateToProps = state => ({
  rules: getRules(state),
  ingredients: getIngredients(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomOrder);
