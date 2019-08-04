import React from 'react';
import renderer from 'react-test-renderer'

import Payment from '../../../screens/Bag/payment';

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

describe('<Payment />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<Payment {...props} />).toJSON();
    expect(tree.children.length).toBe(3)
  })
})