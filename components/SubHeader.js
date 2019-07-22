import React from 'react'
import styled from 'styled-components'

import { fonts, colors } from '../utils'

const SubHeader = ({ title }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <BodyContainer>
        <SquareContainer>
          <Square></Square>
        </SquareContainer>
      </BodyContainer>
    </Container>
  )
}

export default SubHeader

const Container = styled.View`
`
const TitleContainer = styled.View`
  align-items: center;
  height: 50;
  background: #FFF;
  flex-direction: row;
`
const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 12;
  font-family: ${fonts.boldFont};
  letter-spacing: 3;
  color: ${colors.secondaryColor}
`
const BodyContainer = styled.View`
  height: 0.5;
  background: #bfbfbf;
  flex-direction: row;
  align-items: center;
  background: #bfbfbf;
  flex-direction: row;
`
const SquareContainer = styled.View`
  flex: 1;
  height: 0.5;
`
const Square = styled.View`
  width: 6;
  height: 6;
  left: 50%;
  background: ${colors.primaryMoreColored};
  transform: rotate(45deg);
  top: -2.5
`
