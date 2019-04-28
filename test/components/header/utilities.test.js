const { keys } = require('ramda');

const { getTitleByPage } = require('../../../app/components/header/utilities');
const routes = require('../../../app/constants/routes');

test('[getTitleByPage] Every page should have a title', () => {
  keys(routes).forEach((route) => {
    expect(getTitleByPage(routes[route])).not.toEqual('');
  });
});

test('[getTitleByPage] Given a non route string the get title should return empty', () => {
  expect(getTitleByPage('ExTrEMeLy RaNdOm StRiNg')).toEqual('');
});
