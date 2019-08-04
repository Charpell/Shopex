import React from 'react';
import renderer from 'react-test-renderer'

import { CategoryLink } from '../../components/CategoryLink';

const props = {
  category: {},
  fetchProductsInCategory: jest.fn()
}

describe('<CategoryLink />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<CategoryLink {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})