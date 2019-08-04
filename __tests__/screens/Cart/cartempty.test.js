import React from 'react';
import renderer from 'react-test-renderer'

import CartEmpty from '../../../screens/Cart/cartempty';

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

describe('<CartEmpty />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<CartEmpty {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})