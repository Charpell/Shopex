import React from 'react';
import renderer from 'react-test-renderer'

import Modal from '../../../screens/Store/modal';

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

describe('<Modal />', () => {
  it.skip('has 1 child', () => {
    const tree = renderer.create(<Modal {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})