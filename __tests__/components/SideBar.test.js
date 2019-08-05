import React from 'react';
import renderer from 'react-test-renderer'

import { SideBar } from '../../components/SideBar';

const props = {
  navigation: {},
  logOut: jest.fn(),
  cart: {
    cart: {
      
    }
  }
}

describe('<SideBar />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<SideBar {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})