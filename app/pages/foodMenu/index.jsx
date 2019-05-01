import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';

import { CUSTOM_ORDER } from '@/constants/routes';
import Grid from '@/components/grid';
import TitleContainer from '@/components/titleContainer';

import { getMenu } from '@/state/menu/selectors';
import { fetchMenu } from '@/state/menu/actions';


import * as styles from './style';

import BurgerImage from './burger.png';
import PlusImage from './plus.png';

const FoodMenu = (props) => {
  useEffect(() => {
    props.fetchMenu();
  });

  return (
    <Grid columns="1fr" rows="auto auto" style={styles.container}>
      <Grid.Cell row="1">
        <TitleContainer
          title="MENU"
          subtitle="Build your own Burger"
          subtitleAction={() => props.push(CUSTOM_ORDER)}
          subtitleTarget={CUSTOM_ORDER}
        />
      </Grid.Cell>
      <Grid.Cell>
        <Grid columns="100px 280px auto" rows="1" style={styles.burgersContainer}>
          <Grid.Cell column="1" row="1">
            <img src={BurgerImage} alt="burger" style={styles.burgerImage} />
          </Grid.Cell>
          <Grid.Cell column="2" row="1">
            <h2 style={styles.burgerName}> X-Bacon </h2>
            <p style={styles.burgerDescription}> Ovo, bacon, hambúrguer de carne e queijo </p>
            <p style={styles.burgerPrice}> R$ 20,00 </p>
          </Grid.Cell>
          <Grid.Cell column="3" row="1" style={styles.iconContainer}>
            <img src={PlusImage} alt="Add to cart" />
          </Grid.Cell>
        </Grid>
      </Grid.Cell>
    </Grid>
  );
};

FoodMenu.propTypes = {
  push: PropTypes.func.isRequired,
  fetchMenu: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  push,
  fetchMenu,
};

const mapStateToProps = state => ({
  menu: getMenu(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodMenu);
