import React from 'react';
import renderer from 'react-test-renderer'

import LifeDetails from '../../../screens/Inspiration/LifeDetails';

const props = {
  navigation: {
    navigate: jest.fn(),
    getParam: jest.fn()
  }
}

describe('<LifeDetails />', () => {
  it.skip('has 1 child', () => {
    const tree = renderer.create(<LifeDetails {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})