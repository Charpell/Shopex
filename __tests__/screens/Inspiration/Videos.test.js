import React from 'react';
import renderer from 'react-test-renderer'

import Videos from '../../../screens/Inspiration/Videos';

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

describe('<Videos />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Videos {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})