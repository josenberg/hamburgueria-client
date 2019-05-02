const {
  calculatePrice,
} = require('../../app/utilities/price');

const LETTUCE = {
  id: 1,
  price: 0.4,
};

const BACON = {
  id: 2,
  price: 2,
};

const MEAT = {
  id: 3,
  price: 3,
};

const CHEESE = {
  id: 5,
  price: 1.5,
};

const RULES = [{
  id: 1,
  type: 'discount_percentage',
  with: [1],
  without: [2],
  value: 0.9,
}, {
  id: 2,
  type: 'free_item',
  ingredient: 3,
  value: 2,
}, {
  id: 3,
  type: 'free_item',
  ingredient: 5,
  value: 2,
}];

test('[calculatePrice] Light orders should have 10% of discount', () => {
  const lightOrder = [{
    ...LETTUCE,
    quantity: 1,
  }];

  const nonLightOrder = [{
    ...BACON,
    quantity: 1,
  }];

  const nonLightOrder2 = [{
    ...LETTUCE,
    quantity: 1,
  }, {
    ...BACON,
    quantity: 1,
  }];

  expect(calculatePrice(lightOrder, RULES)).toEqual(0.4 * 0.9);
  expect(calculatePrice(nonLightOrder, RULES)).toEqual(2);
  expect(calculatePrice(nonLightOrder2, RULES)).toEqual(2.4);
});

test('[calculatePrice] Every three burger one should be free', () => {
  const twoBurgers = [{
    ...MEAT,
    quantity: 2,
  }];

  const threeBurgers = [{
    ...MEAT,
    quantity: 3,
  }];

  expect(calculatePrice(twoBurgers, RULES)).toEqual(6);
  expect(calculatePrice(threeBurgers, RULES)).toEqual(6);
});

test('[calculatePrice] Every three cheeses one should be free', () => {
  const twoCheeses = [{
    ...CHEESE,
    quantity: 2,
  }];

  const threeCheeses = [{
    ...CHEESE,
    quantity: 3,
  }];

  expect(calculatePrice(twoCheeses, RULES)).toEqual(3);
  expect(calculatePrice(threeCheeses, RULES)).toEqual(3);
});
