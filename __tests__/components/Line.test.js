import React from 'react';
import renderer from 'react-test-renderer'

import Line from '../../components/Line';

const props = {
  width: ''
}

describe('<Line />', () => {
  it('to be null', () => {
    const tree = renderer.create(<Line {...props} />).toJSON();
    expect(tree.children).toBe(null)
  })
})