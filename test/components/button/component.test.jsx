import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../../../app/components/titleContainer';

test('Button should render the type="primary" without issues', () => {
  const component = renderer.create(
    <Button
      onClickAction={() => {}}
      type="primary"
      label=""
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button should render the type="cancel" without issues', () => {
  const component = renderer.create(
    <Button
      onClickAction={() => {}}
      type="cancel"
      label=""
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('Button should render the type="minus" without issues', () => {
  const component = renderer.create(
    <Button
      onClickAction={() => {}}
      type="minus"
      label=""
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button should render the type="plus" without issues', () => {
  const component = renderer.create(
    <Button
      onClickAction={() => {}}
      type="plus"
      label=""
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
