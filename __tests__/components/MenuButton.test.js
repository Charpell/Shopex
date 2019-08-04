import React from 'react';
import renderer from 'react-test-renderer'

import MenuButton from '../../components/MenuButton';

const props = {
  navigation: {}
}

describe('<MenuButton />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<MenuButton {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})