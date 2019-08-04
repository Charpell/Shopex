import React from 'react';
import renderer from 'react-test-renderer'

import { CartEdit } from '../../../screens/Cart/cartedit';

const props = {
  navigation: {
    navigate: jest.fn(),
    handleLogin: jest.fn(),
    colorData: {},
    sizeData: {},
    getParam: jest.fn()
  }
}

describe('<CartEdit />', () => {
  it.skip('has 1 child', () => {
    const tree = renderer.create(<CartEdit {...props} />).toJSON();
    expect(tree.children.length).toBe(6)
  })
})