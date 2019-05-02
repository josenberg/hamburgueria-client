import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@/components/grid';

import * as styles from './style';

const Promotions = ({
  rules,
}) => (
  <Grid columns="1fr auto" rows="1" style={styles.titleContainer}>
    <Grid.Cell column="1">
      <p style={styles.title}> Confira nossas promocoes </p>
      <ul>
        {rules.map(({ description, id }) => (
          <li key={`rule-${id}`}>
            {description}
          </li>
        ))}
      </ul>
    </Grid.Cell>
  </Grid>
);

Promotions.defaultProps = {
  rules: [],
};

Promotions.propTypes = {
  rules: PropTypes.array,
};

export default Promotions;
