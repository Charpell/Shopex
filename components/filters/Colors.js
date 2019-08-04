import React from 'react'
import styled from 'styled-components/native';

const selected = require('../../assets/images/selected-color-bg.png')
const notSelected = require('../../assets/images/filter-item-bg.png')

const Colors = ({ color }) => {
  return (
    <Container key={color.value}>
      <Background resizeMode={'contain'}
        source={color.selected ? selected : notSelected}
      >
        <Shape style={{ backgroundColor: color.value }}></Shape>
      </Background>
    </Container>
  )
}

export default Colors

const Container = styled.TouchableOpacity`
  width: 35;
  height: 41;
  margin-right: 10;
`
const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
const Shape = styled.View`
  width: 16px;
  height: 16px;
`
