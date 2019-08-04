import React, { Component } from 'react'
import styled from 'styled-components/native'

import InspirationHeader from '../../components/InspirationHeader';
import CarouselContainer from '../../components/CarouselContainer';
import { lifeData } from '../../data/inspiration'

export default class Life extends Component {
  render() {
    return (
      <Container>
        <Body>
          <InspirationHeader width={40} leftText={'L'} rightText={'IFE'}
            navigation={this.props.navigation} close={true} />
        </Body>
        <CarouselContainer navigation={this.props.navigation} data={lifeData} />
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