import React, { Component } from 'react'
import styled from 'styled-components'

import ColorsFilter from '../../components/filters/Colors'
import SizeFilter from '../../components/filters/Sizes';

import { colorData, sizeData } from '../../data/home';
import { colors, fonts } from '../../utils'

export default class filter extends Component {
  colorFilter = () => (
    <FilterView>
      <FilterLabel>{'FILTER BY COLOR'}</FilterLabel>
      <FilterContainer>
        {colorData.map((color, index) => (
          <ColorsFilter color={color} key={'color' + index} />
        ))}
      </FilterContainer>
    </FilterView>
  )

  sizeFilter = () => (
    <FilterView>
      <FilterLabel>{'FILTER BY SIZE'}</FilterLabel>
      <FilterContainer>
        {sizeData.map((size, index) => (
          <SizeFilter size={size} key={'size' + index} />
        ))}
      </FilterContainer>
    </FilterView>
  )

  filterButton = () => (
    <ButtonView>
      <ButtonContainer>
        <ButtonText>{'APPLY FILTERS'}</ButtonText>
      </ButtonContainer>
    </ButtonView>
  )

  render() {
    return (
      <Container>
        <ViewWrapper>
          <InnerWrapper>
            {this.sizeFilter()}
            {this.colorFilter()}
          </InnerWrapper>
            {this.filterButton()}
        </ViewWrapper>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%
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
const FilterView = styled.View`
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
const ButtonView = styled.View`

`
const ButtonContainer = styled.TouchableOpacity`
  background: ${colors.primaryMoreColored};
  height: 80;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20;
`
const ButtonText = styled.Text`
  font-family: ${fonts.boldFont};
  font-size: 15;
  color: white;
  letter-spacing: 3;
`