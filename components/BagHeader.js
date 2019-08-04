import React from 'react'
import styled from 'styled-components/native';

import { fonts, colors } from '../utils';
const data = ['ADDRESS', 'PAYMENT', 'COMPLETE']

const BagHeader = ({ current }) => {
  return (
    <Container>
      <Wrapper>
        {data.map((text, index) => (
          <Title
            key={index}
            style={current === index ? { color: colors.secondaryColor} : {}}
          >
            {text}
          </Title>
        ))}
      </Wrapper>
      <SquareContainer>
        {data.map((text, index) => (
          <SquareWrapper key={index}>
            <Square style={current === index ? { backgroundColor: colors.primaryMoreColored } : {}}></Square>
          </SquareWrapper>
        ))}
      </SquareContainer>
    </Container>
  )
}

export default BagHeader

const Container = styled.View`
  padding-top: 40px
`
const Wrapper = styled.View`
  height: 40;
  background: white;
  flex-direction: row;
`
const Title = styled.Text`
  flex: 0.3333;
  align-items: center;
  text-align: center;
  font-size: 12;
  font-family: ${fonts.boldFont};
  letter-spacing: 3;
  color: rgba(69,69,69, 0.3);
`
const SquareContainer = styled.View`
  height: 0.5;
  background: #bfbfbf;
  flex-direction: row;
  align-items: center;
`
const SquareWrapper = styled.View`
  flex: 0.3333;
  height: 0.5
`
const Square = styled.View`
  width: 6;
  height: 6;
  left: 45%;
  background: #ccc;
  transform: rotate(45deg);
  top: -2.5
`