import React from 'react';
import renderer from 'react-test-renderer'

import BackButton from '../../components/BackButton';

const props = {
  navigation: {}
}

describe('<BackButton />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<BackButton {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})