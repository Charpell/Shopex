import React from 'react';
import renderer from 'react-test-renderer'

import { FilterButton } from '../../components/FilterButton';

const props = {
  openFilterMenu: jest.fn()
}

describe('<FilterButton />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<FilterButton {...props} />).toJSON();
    expect(tree.children.length).toBe(1)
  })
})