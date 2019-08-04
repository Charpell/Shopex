import React from 'react';
import renderer from 'react-test-renderer'

import Life from '../../../screens/Inspiration/Life';

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

describe('<Life />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<Life {...props} />).toJSON();
    expect(tree.children.length).toBe(2)
  })
})