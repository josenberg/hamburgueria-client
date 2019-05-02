import reducer from '../../../app/state/menu/reducers';
import {
  MENU_REQUESTED,
  MENU_SUCCEEDED,
  MENU_FAILED,
} from '../../../app/state/menu/actions';

describe('Menu Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual({
        isLoading: false,
        menuItems: [],
        error: null,
      });
  });

  it('should return loading true when the menu are requested', () => {
    expect(reducer(undefined, {
      type: MENU_REQUESTED,
    }))
      .toEqual({
        isLoading: true,
        menuItems: [],
        error: null,
      });
  });

  it('should return a error when the menu request fail', () => {
    const error = { error: 'FATAL AND CATASTROPHIC error' };
    expect(reducer(undefined, {
      type: MENU_FAILED,
      error,
    }))
      .toEqual({
        isLoading: false,
        menuItems: [],
        error,
      });
  });

  it('should return a the menu items when the request is a success', () => {
    const menuItems = [{
      id: 1,
      name: 'xbacon',
      displayName: 'X-Bacon',
      ingredients: [2, 3, 5],
    }];

    expect(reducer(undefined, {
      type: MENU_SUCCEEDED,
      menuItems,
    }))
      .toEqual({
        isLoading: false,
        menuItems,
        error: null,
      });
  });
});
