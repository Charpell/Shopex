import React from 'react';
import renderer from 'react-test-renderer'

import InspirationText from '../../components/InspirationText';

const props = {
  strongText: '',
  resetLetters: ''
}

describe('<InspirationText />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<InspirationText {...props} />).toJSON();
    expect(tree.children.length).toBe(2)
  })
})