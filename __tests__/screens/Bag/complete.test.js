import React from 'react';
import renderer from 'react-test-renderer'

import Complete from '../../../screens/Bag/complete';

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

describe('<Complete />', () => {
  it('has 3 children', () => {
    const tree = renderer.create(<Complete {...props} />).toJSON();
    expect(tree.children.length).toBe(3)
  })
})