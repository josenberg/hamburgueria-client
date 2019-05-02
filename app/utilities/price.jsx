export const calculatePrice = (ingredients = [], rules = []) => {
  let fullPrice = ingredients.reduce((full, { price, quantity }) => (
    full + (price * quantity)
  ), 0);

  const freeItemRules = rules.filter(({ type }) => type === 'free_item');
  const discountPercentageRules = rules.filter(({ type }) => type === 'discount_percentage');

  freeItemRules.forEach(({ ingredient, value }) => {
    const currentIngredient = ingredients.find(ing => ing.id === ingredient);
    if (currentIngredient) {
      const { quantity, price } = currentIngredient;
      const discount = Math.floor(quantity / (value + 1)) * price;
      fullPrice -= discount;
    }
  });

  discountPercentageRules.forEach(({ value, ...rule }) => {
    const hasRequireIngredients = rule.with.every(requiredIngredient => (
      ingredients.some(ingredient => ingredient.id === requiredIngredient)));
    const hasForbbidenIngredients = rule.without.some(forbiddenIngredient => (
      ingredients.some(ingredient => ingredient.id === forbiddenIngredient)));

    if (hasRequireIngredients && !hasForbbidenIngredients) {
      fullPrice *= value;
    }
  });

  return fullPrice;
};

export const formatCurrency = number => (
  new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(number)
);
