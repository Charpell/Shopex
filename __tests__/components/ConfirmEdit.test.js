import React from 'react';
import renderer from 'react-test-renderer'

import ConfirmEdit from '../../components/ConfirmEdit';

const props = {
  navigation: {},
  data: {}
}

describe('<ConfirmEdit />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<ConfirmEdit {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})