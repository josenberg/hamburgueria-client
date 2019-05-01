import * as API from '../../app/api';

global.fetch = require('jest-fetch-mock');

describe('API calls', () => {
  it('Should try to ', () => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
    const mockFetchPromise = Promise.resolve({ // 3
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4

    API.fetchMenu();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`${API.API_URL}/menu`, {
      method: 'GET',
    });
  });
});
