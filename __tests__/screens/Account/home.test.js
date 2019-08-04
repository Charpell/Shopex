import React from 'react';
import renderer from 'react-test-renderer'

import Home from '../../../screens/Account/home';

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

describe('<Home />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<Home {...props} />).toJSON();
    expect(tree.children.length).toBe(2)
  })
})