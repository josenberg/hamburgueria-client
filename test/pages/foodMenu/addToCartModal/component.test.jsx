import 'babel-polyfill';
import React from 'react';
import renderer from 'react-test-renderer';

import addToCartModal from '../../../../app/pages/foodMenu/components/addToCartModal';

test('Add To Cart Modal should render without issues', () => {
  const component = renderer.create(
    <addToCartModal
      ingredients={[]}
      rules={[]}
      item={{}}
      isOpen={false}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
