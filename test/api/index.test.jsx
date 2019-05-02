import * as API from '../../app/api';

global.fetch = require('jest-fetch-mock');

describe('API calls', () => {
  beforeAll(() => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
  });

  it('Should fetch menu', () => {
    API.fetchMenu();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`${API.API_URL}/menu`, {
      method: 'GET',
    });
  });

  it('Should fetch rules', () => {
    API.fetchRules();

    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith(`${API.API_URL}/menu`, {
      method: 'GET',
    });
  });

  it('Should fetch ingredients', () => {
    API.fetchIngredients();

    expect(global.fetch).toHaveBeenCalledTimes(3);
    expect(global.fetch).toHaveBeenCalledWith(`${API.API_URL}/ingredients`, {
      method: 'GET',
    });
  });
});
