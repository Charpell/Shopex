import React from 'react';
import renderer from 'react-test-renderer'

import { Category } from '../../../screens/Category/mencategory';

const props = {
  navigation: {
    navigate: jest.fn()
  },
  products: {
    isLoading: false,
    products: []
  }
}

describe('<MenCategory />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Category {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})