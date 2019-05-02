export const updateItemIngredientQuantity = (updateItem, ingredientList, item, id, quantity) => {
  if (quantity < 0) {
    return;
  }
  let newIngredients;
  const itemHasIngridient = item.ingredients.some(({ id: ingredientId }) => ingredientId === id);
  if (itemHasIngridient) {
    newIngredients = item.ingredients.map((ingredient) => {
      if (ingredient.id !== id) {
        return ingredient;
      }

      return {
        ...ingredient,
        quantity,
      };
    });
  } else {
    newIngredients = [
      ...item.ingredients,
      {
        ...ingredientList.find(({ id: ingredientId }) => ingredientId === id),
        quantity,
      },
    ];
  }
  updateItem({
    ...item,
    ingredients: newIngredients,
  });
};
