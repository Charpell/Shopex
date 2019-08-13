import React from 'react';
import renderer from 'react-test-renderer'

import { Category } from '../../../screens/Category/womencategory';

const props = {
  navigation: {
    navigate: jest.fn()
  },
  products: {
    isLoading: false,
    products: []
  }
}

describe('<WomenCategory />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Category {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})