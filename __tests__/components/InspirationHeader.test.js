import React from 'react';
import renderer from 'react-test-renderer'

import InspirationHeader from '../../components/InspirationHeader';

const props = {
  navigation: {},
  back: {},
  headerTitle: '',
  width: '',
  leftText: '',
  rightText: ''
}

describe('<InspirationHeader />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<InspirationHeader {...props} />).toJSON();
    expect(tree.children.length).toBe(3)
  })
})