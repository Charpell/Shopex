import React from 'react';
import renderer from 'react-test-renderer'

import WomenCategory from '../../../screens/Category/womencategory';

const props = {
  navigation: {
    navigate: jest.fn()
  }
}

describe('<WomenCategory />', () => {
  it.skip('has 1 child', () => {
    const tree = renderer.create(<WomenCategory {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})