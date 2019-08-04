import React from 'react';
import renderer from 'react-test-renderer'

import FashionCarousel from '../../components/FashionCarousel';

const props = {
  navigation: {},
  data: {}
}

describe('<FashionCarousel />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<FashionCarousel {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})