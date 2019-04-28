import React from 'react';
import PropTypes from 'prop-types';

import GridCell from './cell';

import { buildGridStyle } from './utilities';

const Grid = (props) => {
  const {
    rows,
    columns,
    children,
    style,
    rowGap,
    colGap,
  } = props;
  return (
    <div
      style={buildGridStyle({
        rows, columns, style, rowGap, colGap,
      })}
      className="grid"
    >
      {children}
    </div>
  );
};

Grid.defaultProps = {
  rows: 'auto',
  columns: 'auto',
  style: null,
  rowGap: '0px',
  colGap: '0px',
};

Grid.propTypes = {
  // push: PropTypes.func.isRequired,
  rows: PropTypes.string,
  columns: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape),
    PropTypes.shape,
  ]),
  rowGap: PropTypes.string,
  colGap: PropTypes.string,
};

Grid.Cell = GridCell;

export default Grid;
