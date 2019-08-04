import React from 'react';
import renderer from 'react-test-renderer'

import Fashion from '../../../screens/Inspiration/Fashion';

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

describe('<Fashion />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<Fashion {...props} />).toJSON();
    expect(tree.children.length).toBe(2)
  })
})