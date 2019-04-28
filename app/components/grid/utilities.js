export const buildGridStyle = ({
  rows = 'auto',
  columns = 'auto',
  style,
  rowGap = '0px',
  colGap = '0px',
}) => ({
  display: 'grid',
  gridTemplateRows: rows,
  gridTemplateColumns: columns,
  rowGap,
  colGap,
  ...style,
});

export const buildCellStyle = ({
  row,
  column,
  style,
  columnSpan,
  rowSpan,
}) => {
  let cellStyle = {
    display: 'grid',
    ...style,
  };

  if (column) {
    cellStyle = {
      ...cellStyle,
      gridColumn: columnSpan ? `${column} / span ${columnSpan}` : column,
    };
  }

  if (row) {
    cellStyle = {
      ...cellStyle,
      gridRow: rowSpan ? `${row} / span ${rowSpan}` : row,
    };
  }

  return cellStyle;
};
