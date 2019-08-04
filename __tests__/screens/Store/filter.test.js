import React from 'react';
import renderer from 'react-test-renderer'

import Filter from '../../../screens/Store/filter';

const props = {
  navigation: {
    navigate: jest.fn(),
    colorData: {},
    sizeData: {}
  }
}

describe('<Filter />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Filter {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})