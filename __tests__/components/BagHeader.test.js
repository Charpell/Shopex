import React from 'react';
import renderer from 'react-test-renderer'

import BagHeader from '../../components/BagHeader';

const props = {
  current: {}
}

describe('<BagHeader />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<BagHeader {...props} />).toJSON();
    expect(tree.children.length).toBe(2)
  })
})