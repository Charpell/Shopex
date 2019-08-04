import React from 'react';
import renderer from 'react-test-renderer'

import Feedback from '../../../screens/Contact/feedback';

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

describe('<Feedback />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Feedback {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})