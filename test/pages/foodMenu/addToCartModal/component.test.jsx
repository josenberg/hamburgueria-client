import 'babel-polyfill';
import React from 'react';
import renderer from 'react-test-renderer';

import addToCartModal, { updateItemIngredientQuantity } from '../../../../app/pages/foodMenu/components/addToCartModal';

test('Should not update if the quantity is bellow zero', () => {
  const mockedUpdateItem = jest.fn();
  updateItemIngredientQuantity(mockedUpdateItem, [], {}, 1, -1);
  expect(mockedUpdateItem).toHaveBeenCalledTimes(0);
});

test('Should update the ingredient if it already exist in the item', () => {
  const item1 = {
    id: 1,
    name: 'alface',
    displayName: 'Alface',
    price: 0.4,
  };

  const item2 = {
    id: 2,
    name: 'bacon',
    displayName: 'Bacon',
    price: 2,
  };

  const ingredientsList = [item1, item2];
  const item = {
    ingredients: [{
      ...item1,
      quantity: 2,
    }],
  };

  const mockedUpdateItem = jest.fn();
  updateItemIngredientQuantity(mockedUpdateItem, ingredientsList, item, 1, 1);
  expect(mockedUpdateItem).toHaveBeenCalledTimes(1);
});

test('Should add the ingredient if it do not exist in the item', () => {
  const item1 = {
    id: 1,
    name: 'alface',
    displayName: 'Alface',
    price: 0.4,
  };

  const item2 = {
    id: 2,
    name: 'bacon',
    displayName: 'Bacon',
    price: 2,
  };

  const ingredientsList = [item1, item2];
  const item = {
    ingredients: [{
      ...item1,
      quantity: 1,
    }],
  };

  const mockedUpdateItem = jest.fn();
  updateItemIngredientQuantity(mockedUpdateItem, ingredientsList, item, 2, 1);
  expect(mockedUpdateItem).toHaveBeenCalledTimes(1);
});

test('Add To Cart Modal should render without issues', () => {
  const component = renderer.create(
    <addToCartModal
      ingredients={[]}
      rules={[]}
      item={{}}
      isOpen={false}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
