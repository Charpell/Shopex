import React from 'react';
import renderer from 'react-test-renderer'

import { LoginScreen } from '../../../screens/Authentication/LoginScreen';

const props = {
  navigation: {
    navigate: jest.fn(),
    handleLogin: jest.fn()
  }
}

describe('<LoginScreen />', () => {
  it('has 6 children', () => {
    const tree = renderer.create(<LoginScreen {...props} />).toJSON();
    expect(tree.children.length).toBe(6)
  })
})