import React from 'react';
import renderer from 'react-test-renderer'

import HomeButton from '../../components/HomeButton';

const props = {
  navigation: {}
}

describe('<HomeButton />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<HomeButton {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})