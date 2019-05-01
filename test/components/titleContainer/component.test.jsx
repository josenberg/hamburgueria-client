import React from 'react';
import renderer from 'react-test-renderer';

import TitleContainer from '../../../app/components/titleContainer';
// Redux store


test('Header should render without issues', () => {
  const component = renderer.create(<TitleContainer />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
