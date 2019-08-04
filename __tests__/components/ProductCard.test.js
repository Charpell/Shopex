import React from 'react';
import renderer from 'react-test-renderer'

import ProductCard from '../../components/ProductCard';

const props = {
  navigation: {},
  product: {},
  image: ''
}

describe('<ProductCard />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<ProductCard {...props} />).toJSON();
    expect(tree.children.length).toBe(2)
  })
})