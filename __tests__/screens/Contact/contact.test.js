import React from 'react';
import renderer from 'react-test-renderer'

import Contact from '../../../screens/Contact/contact';

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

describe('<Contact />', () => {
  it('has 4 children', () => {
    const tree = renderer.create(<Contact {...props} />).toJSON();
    expect(tree.children.length).toBe(4)
  })
})