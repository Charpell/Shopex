import React from 'react';
import renderer from 'react-test-renderer'

import LandingScreen from '../../screens/LandingScreen';;

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

describe('<LandingScreen />', () => {
  it.skip('has 1 child', () => {
    const tree = renderer.create(<LandingScreen {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})