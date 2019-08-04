import React from 'react';
import renderer from 'react-test-renderer'

import { ProductListItem } from '../../components/ProductListItem';

const props = {
  products: {},
  navigation: {}
}

describe('<ProductListItem />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<ProductListItem {...props} />).toJSON();
    expect(tree.children.length).toBe(3)
  })
})