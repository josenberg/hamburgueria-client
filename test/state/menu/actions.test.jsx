import {
  fetchMenu,
  fetchMenuSuccess,
  fetchMenuFailure,
  MENU_REQUESTED,
  MENU_SUCCEEDED,
  MENU_FAILED,
} from '../../../app/state/menu/actions';

describe('Menu Actions', () => {
  it('should create an action to fetch the Menu', () => {
    const expectedAction = {
      type: MENU_REQUESTED,
    };
    expect(fetchMenu()).toEqual(expectedAction);
  });

  it('should create an action for when the fetch succeded', () => {
    const menuItems = [{
      id: 1,
      name: 'xbacon',
      displayName: 'X-Bacon',
      ingredients: [2, 3, 5],
    }];

    const expectedAction = {
      type: MENU_SUCCEEDED,
      menuItems,
    };
    expect(fetchMenuSuccess(menuItems)).toEqual(expectedAction);
  });

  it('should create an action for when the fetch fail', () => {
    const error = { error: 'FATAL AND CATASTROPHIC error' };
    const expectedAction = {
      type: MENU_FAILED,
      error,
    };
    expect(fetchMenuFailure(error)).toEqual(expectedAction);
  });
});
