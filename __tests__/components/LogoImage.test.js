import React from 'react';
import renderer from 'react-test-renderer'

import LogoImage from '../../components/LogoImage';


describe('<LogoImage />', () => {
  it('to be null', () => {
    const tree = renderer.create(<LogoImage />).toJSON();
    expect(tree.children).toBe(null)
  })
})