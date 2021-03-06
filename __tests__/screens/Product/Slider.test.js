import React from 'react';
import renderer from 'react-test-renderer'

import Slider from '../../../screens/Product/Slider';

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

describe('<Slider />', () => {
  it.skip('to be null', () => {
    const tree = renderer.create(<Slider {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})