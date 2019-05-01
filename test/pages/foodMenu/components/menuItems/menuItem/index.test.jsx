const {
  formatIngredientsList,
} = require('../../../../../../app/pages/foodMenu/components/menuItems/menuItem');

test('[formatIngredientsList] should format the ingredient label correctly', () => {
  const item1 = {
    displayName: 'Ovo',
  };

  const item2 = {
    displayName: 'Queijo',
  };

  const item3 = {
    displayName: 'Hamburger',
  };

  expect(formatIngredientsList([item1, item2, item3])).toEqual('Ovo, Queijo e Hamburger');
  expect(formatIngredientsList([item1, item2])).toEqual('Ovo e Queijo');
  expect(formatIngredientsList([item1])).toEqual('Ovo');
});
