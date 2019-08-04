import React from 'react';
import renderer from 'react-test-renderer'

import MenCategory from '../../../screens/Category/mencategory';

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

describe('<MenCategory />', () => {
  it.skip('has 1 child', () => {
    const tree = renderer.create(<MenCategory {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})