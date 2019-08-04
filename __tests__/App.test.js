import React from 'react';
import renderer from 'react-test-renderer'

import App from '../App'

describe('<App />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<App />);
    const instance = tree.getInstance()
    instance.setState({ fontLoaded: true })
    const updatedTree = tree.toJSON()
    expect(updatedTree.children.length).toBe(2)
  })
})