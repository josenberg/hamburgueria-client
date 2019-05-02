import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';

import { CUSTOM_ORDER } from '@/constants/routes';
import Grid from '@/components/grid';
import TitleContainer from '@/components/titleContainer';

import { getMenu } from '@/state/menu/selectors';
import { fetchMenu } from '@/state/menu/actions';

import { getRules } from '@/state/rules/selectors';
import { fetchRules } from '@/state/rules/actions';

import { getIngredients } from '@/state/ingredients/selectors';
import { fetchIngredients } from '@/state/ingredients/actions';

import MenuItems from './components/menuItems';

import * as styles from './style';
import Promotions from '../../components/promotions';
import AddToCartModal from './components/addToCartModal';

const FoodMenu = (props) => {
  useEffect(() => {
    props.fetchMenu();
    props.fetchRules();
    props.fetchIngredients();
  }, []);

  const initialState = { item: null };
  const [state, setState] = useState(initialState);

  const { menu, rules, ingredients } = props;

  return (
    <Grid columns="1fr" rows="auto auto auto" style={styles.container}>
      <Grid.Cell row="1">
        <TitleContainer
          title="MENU"
          subtitle="Build your own Burger"
          subtitleAction={() => props.push(CUSTOM_ORDER)}
          subtitleTarget={CUSTOM_ORDER}
        />
      </Grid.Cell>
      <Grid.Cell style={styles.menuItemsContainer}>
        <MenuItems
          items={menu}
          rules={rules}
          addToCart={item => setState({ item })}
        />
        <AddToCartModal
          item={state.item}
          closeModal={() => setState({ item: null })}
          ingredients={ingredients}
          rules={rules}
          updateItem={item => setState({ item })}
        />

      </Grid.Cell>
      <Grid.Cell style={styles.menuItemsContainer}>
        <Promotions rules={rules} />
      </Grid.Cell>
    </Grid>
  );
};

FoodMenu.propTypes = {
  push: PropTypes.func.isRequired,
  fetchMenu: PropTypes.func.isRequired,
  fetchRules: PropTypes.func.isRequired,
  fetchIngredients: PropTypes.func.isRequired,
  menu: PropTypes.array,
  rules: PropTypes.array,
  ingredients: PropTypes.array,
};

const mapDispatchToProps = {
  push,
  fetchMenu,
  fetchRules,
  fetchIngredients,
};

const mapStateToProps = state => ({
  menu: getMenu(state),
  rules: getRules(state),
  ingredients: getIngredients(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodMenu);
