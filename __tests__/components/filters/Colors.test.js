import React from 'react';
import renderer from 'react-test-renderer'

import Colors from '../../../components/filters/Colors';

const props = {
  color: {

  }
}

describe('<Colors />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<Colors {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})