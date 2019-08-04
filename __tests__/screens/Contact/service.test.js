import React from 'react';
import renderer from 'react-test-renderer'

import Service from '../../../screens/Contact/service';

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

describe('<Service />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Service {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})