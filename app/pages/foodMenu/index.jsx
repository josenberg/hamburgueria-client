import React, { useEffect } from 'react';
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

import MenuItems from './components/menuItems';

import * as styles from './style';
import Promotions from '../../components/promotions';

const FoodMenu = (props) => {
  useEffect(() => {
    props.fetchMenu();
    props.fetchRules();
  }, []);

  const { menu, rules } = props;

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
        <MenuItems items={menu} rules={rules} />
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
  menu: PropTypes.array,
  rules: PropTypes.array,
};

const mapDispatchToProps = {
  push,
  fetchMenu,
  fetchRules,
};

const mapStateToProps = state => ({
  menu: getMenu(state),
  rules: getRules(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodMenu);
