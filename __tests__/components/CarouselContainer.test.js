import React from 'react';
import renderer from 'react-test-renderer'

import CarouselContainer from '../../components/CarouselContainer';

const props = {
  navigation: {},
  data: {}
}

describe('<CarouselContainer />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<CarouselContainer {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})