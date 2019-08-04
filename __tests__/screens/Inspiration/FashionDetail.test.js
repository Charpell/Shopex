import React from 'react';
import renderer from 'react-test-renderer'

import FashionDetail from '../../../screens/Inspiration/FashionDetail';

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

describe('<FashionDetail />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<FashionDetail {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})