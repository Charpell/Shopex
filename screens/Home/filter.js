import React, { Component } from 'react'
import styled from 'styled-components'

import ColorsFilter from '../../components/filters/Colors'
import { colorData } from '../../data/home';
import { colors, fonts } from '../../utils'

export default class filter extends Component {
  colorFilter = () => (
    <ColorContainer>
      <FilterLabel>{'FILTER BY COLOR'}</FilterLabel>
      <FilterContainer>
        {colorData.map((color, index) => (
          <ColorsFilter color={color} key={'color' + index} />
        ))}
      </FilterContainer>
    </ColorContainer>
  )

  render() {
    return (
      <Container>
        <ViewWrapper>
          <InnerWrapper>
            {this.colorFilter()}
          </InnerWrapper>
        </ViewWrapper>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`
const ViewWrapper = styled.View`
  height: 55%;
  width: 100%;
  background: rgba(255,255,255,0.8)
`
const InnerWrapper = styled.View`
  flex: 1;
  background: rgba(255,255,255,0.7);
  padding: 15px 0px;
`
const ColorContainer = styled.View`
  padding: 15px 15px;
`
const FilterLabel = styled.Text`
  font-family: ${fonts.regularFont};
  font-size: 15;
  color: ${colors.secondaryColor}
`
const FilterContainer = styled.View`
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 10px;
`
