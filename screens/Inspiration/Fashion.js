import React, { Component } from 'react'
import styled from 'styled-components'

import InspirationHeader from '../../components/InspirationHeader';
import FashionCarousel from '../../components/FashionCarousel'
import { fashionData } from '../../data/inspiration'

export default class Fashion extends Component {
  render() {
    return (
      <Container>
        <Body>
          <InspirationHeader width={80} leftText={'F'} rightText={'ASHION'}
            navigation={this.props.navigation} back={false} close={true} />
        </Body>
        <FashionCarousel navigation={this.props.navigation} data={fashionData} />
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background: #696969
`
const Body = styled.View`
  /* height: 100%; */
  width: 100%
`