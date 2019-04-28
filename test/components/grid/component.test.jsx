import React from 'react';

import renderer from 'react-test-renderer';

import Grid from '../../../app/components/grid';

test('The grid should be abble to render its children without problems', () => {
  const component = renderer.create(
    <Grid rows="1fr" columns="1fr 1fr">
      <Grid.Cell row="1" column="1">
        Left Cell
      </Grid.Cell>
      <Grid.Cell row="1" column="2">
        Right Cell
      </Grid.Cell>
    </Grid>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
