const { buildGridStyle, buildCellStyle } = require('../../../app/components/grid/utilities');

test('[buildGridStyle] It should return the right style properties', () => {
  const params = {
    rows: '1fr 1fr 1fr',
    columns: '1fr 1fr 1fr',
    style: { backgroundColor: 'blue' },
    rowGap: '0px',
    colGap: '0px',
  };

  const expectedResult = {
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    gridTemplateColumns: '1fr 1fr 1fr',
    rowGap: '0px',
    colGap: '0px',
    backgroundColor: 'blue',
  };

  expect(buildGridStyle(params)).toMatchObject(expectedResult);
});

test('[buildCellStyle] It should return the right style properties (Without span)', () => {
  const params = {
    row: '1',
    column: '1',
    style: { backgroundColor: 'blue' },
  };

  const expectedResult = {
    display: 'grid',
    gridColumn: '1',
    gridRow: '1',
    backgroundColor: 'blue',
  };

  expect(buildCellStyle(params)).toMatchObject(expectedResult);
});

test('[buildCellStyle] It should return the handle correctly the span property', () => {
  const params = {
    row: '1',
    column: '1',
    style: { backgroundColor: 'blue' },
    rowSpan: '2',
    columnSpan: '2',
  };

  const expectedResult = {
    display: 'grid',
    gridColumn: '1 / span 2',
    gridRow: '1 / span 2',
    backgroundColor: 'blue',
  };

  expect(buildCellStyle(params)).toMatchObject(expectedResult);
});
