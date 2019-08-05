import React from 'react';
import renderer from 'react-test-renderer'

import { Home } from '../../../screens/Product/Home';

const props = {
  navigation: {
    navigate: jest.fn(),
    getParam: jest.fn(),
  }
}

describe('<Home />', () => {
  it.skip('has 1 child', () => {
    const tree = renderer.create(<Home {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})