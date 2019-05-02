export const INGREDIENTS_REQUESTED = 'INGREDIENTS_REQUESTED';
export const INGREDIENTS_SUCCEEDED = 'INGREDIENTS_SUCCEEDED';
export const INGREDIENTS_FAILED = 'INGREDIENTS_FAILED';

export const fetchIngredients = () => ({
  type: INGREDIENTS_REQUESTED,
});

export const fetchIngredientsSuccess = ingredients => ({
  type: INGREDIENTS_SUCCEEDED,
  ingredients,
});

export const fetchIngredientsFailure = error => ({
  type: INGREDIENTS_FAILED,
  error,
});
