import 'babel-polyfill';
import React from 'react';
import renderer from 'react-test-renderer';

import MenuItem from '../../../../../../app/pages/foodMenu/components/menuItems/menuItem';

test('MenuItem should render without issues', () => {
  const ingredients = [{
    displayName: 'Lanche',
    ingredients: [{
      displayName: 'Ingredient 1',
      price: 0.4,
    }, {
      displayName: 'Ingredient 2',
      price: 0.5,
    }],
  }];

  const item = {
    ingredients,
    displayName: 'X-Princesa',
  };

  const component = renderer.create(
    <MenuItem
      key="xprincesa"
      item={item}
      rules={[]}
      addToCart={() => {}}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
