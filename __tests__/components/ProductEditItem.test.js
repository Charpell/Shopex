import React from 'react';
import renderer from 'react-test-renderer'

import { ProductEditItem } from '../../components/ProductEditItem';

const props = {
  products: {},
  removeItemCart: jest.fn(),
  fetchItemCart: jest.fn()
}

describe('<ProductEditItem />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<ProductEditItem {...props} />).toJSON();
    expect(tree.children.length).toBe(3)
  })
})