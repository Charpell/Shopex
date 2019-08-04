import React from 'react';
import renderer from 'react-test-renderer'

import CustomerService from '../../../screens/Contact/customerservice';

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

describe('<CustomerService />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<CustomerService {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})