import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@/components/grid';

import * as styles from './style';

const TitleContainer = ({
  title, subtitle, subtitleAction, subtitleTarget,
}) => (
  <Grid columns="1fr auto" rows="1" style={styles.titleContainer}>
    <Grid.Cell column="1">
      <h1 style={styles.title}>
        {title}
      </h1>
      <a
        style={styles.link}
        onClick={subtitleAction}
        href={subtitleTarget}
      >
        {subtitle}
      </a>
    </Grid.Cell>
  </Grid>
);

TitleContainer.defaultProps = {
  title: '',
  subtitle: '',
  subtitleAction: () => {},
  subtitleTarget: '',
};

TitleContainer.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleAction: PropTypes.func,
  subtitleTarget: PropTypes.string,
};

export default TitleContainer;
