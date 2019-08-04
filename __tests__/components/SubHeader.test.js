import React from 'react';
import renderer from 'react-test-renderer'

import SubHeader from '../../components/SubHeader';

const props = {
  title: ''
}

describe('<SubHeader />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<SubHeader {...props} />).toJSON();
    expect(tree.children.length).toBe(2)
  })
})