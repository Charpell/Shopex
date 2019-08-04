import React from 'react';
import renderer from 'react-test-renderer'

import Home from '../../../screens/Inspiration/Home';

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

describe('<Home />', () => {
  it('has 3 children', () => {
    const tree = renderer.create(<Home {...props} />).toJSON();
    expect(tree.children.length).toBe(3)
  })
})