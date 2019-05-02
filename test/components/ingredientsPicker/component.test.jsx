import React from 'react';
import renderer from 'react-test-renderer';

import IngredientsPicker from '../../../app/components/ingredientsPicker';

test('IngredientPicker should render without issues', () => {
  const component = renderer.create(
    <IngredientsPicker
      ingredients={[{
        id: 1,
        name: 'alface',
        displayName: 'Alface',
        price: 0.4,
      }]}
      item={{
        ingredients: [{
          id: 1,
          name: 'alface',
          displayName: 'Alface',
          price: 0.4,
          quantity: 1,
        }],
      }}
      updateItem={() => {}}
      rules={[]}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
