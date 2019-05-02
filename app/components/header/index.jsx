import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Grid from '@/components/grid';
import CartIcon from '@/components/cartIcon';

import { getLocationPathname } from '@/state/selectors';

import * as styles from './style';

import { getTitleByPage } from './utilities';

import Logo from './images/burger';

const Header = ({ pathName }) => (
  <Grid rows="auto auto" columns="auto" style={styles.container}>
    <Grid.Cell row="1" style={styles.cartContainer}>
      <CartIcon />
    </Grid.Cell>
    <Grid.Cell row="2">
      <Grid rows="auto auto" columns="200px auto">
        <Grid.Cell row="2" column="1">
          <Logo style={styles.logo} />
        </Grid.Cell>
        <Grid.Cell row="2" column="2">
          <h1 style={styles.title}> Best burguer in the world! </h1>
          <p style={styles.subTitle}>
            {getTitleByPage(pathName)}
          </p>
        </Grid.Cell>
      </Grid>
    </Grid.Cell>
  </Grid>
);

Header.propTypes = {
  pathName: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  pathName: getLocationPathname(state),
});


export default connect(mapStateToProps, null)(Header);
