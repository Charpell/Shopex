import React from 'react';
import renderer from 'react-test-renderer'

import Status from '../../../screens/Account/status';

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

describe('<Status />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Status {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})