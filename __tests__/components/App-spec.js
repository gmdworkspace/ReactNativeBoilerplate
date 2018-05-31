import React from 'react';
import Incrementor from '../../src/components/Incrementor/Incrementor';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const component = renderer.create(<Incrementor />).toJSON();
  expect(component).toMatchSnapshot();
});