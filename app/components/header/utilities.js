import {
  CUSTOM_ORDER,
  FOOD_MENU,
} from '@/constants/routes';

export const getTitleByPage = (currentPage) => {
  switch (currentPage) {
    case CUSTOM_ORDER:
      return 'Build your own burger';
    case FOOD_MENU:
      return 'The best menu for the greatest burgers';
    default:
      return '';
  }
};
