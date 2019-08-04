import React from 'react';
import renderer from 'react-test-renderer'

import Address from '../../../screens/Bag/address';

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

describe('<Address />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<Address {...props} />).toJSON();
    expect(tree.children.length).toBe(2)
  })
})