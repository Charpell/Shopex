import React from 'react';
import renderer from 'react-test-renderer'

import Terms from '../../../screens/Bag/terms';

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

describe('<Terms />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Terms {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})