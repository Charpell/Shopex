import React from 'react';
import renderer from 'react-test-renderer'

import Sizes from '../../../components/filters/Sizes';

const props = {
  size: {

  }
}

describe('<Sizes />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<Sizes {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})