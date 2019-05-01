export const MENU_REQUESTED = 'MENU_REQUESTED';
export const MENU_SUCCEEDED = 'MENU_SUCCEEDED';
export const MENU_FAILED = 'MENU_FAILED';

export const fetchMenu = () => ({
  type: MENU_REQUESTED,
});

export const fetchMenuSuccess = menuItems => ({
  type: MENU_SUCCEEDED,
  menuItems,
});

export const fetchMenuFailure = error => ({
  type: MENU_FAILED,
  error,
});
