import React from 'react';
import PropTypes from 'prop-types';

import { buildCellStyle } from '../utilities';

const Cell = ({
  children,
  row,
  column,
  style,
  rowSpan,
  colSpan,
}) => (
  <div
    style={buildCellStyle({
      row,
      column,
      style,
      rowSpan,
      colSpan,
    })}
    className="grid-cell"
  >
    {children}
  </div>
);

Cell.defaultProps = {
  row: 'auto',
  column: 'auto',
  style: null,
  rowSpan: null,
  colSpan: null,
};

Cell.propTypes = {
  row: PropTypes.string,
  column: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape),
    PropTypes.shape,
  ]),
  rowSpan: PropTypes.string,
  colSpan: PropTypes.string,
};

export default Cell;
