import React from 'react'
import styled from 'styled-components';

import { fonts } from '../../utils'
const selected = require('../../assets/images/icon-size-selected.png')
const notSelected = require('../../assets/images/filter-item-bg.png')

const Sizes = ({ size }) => {
  return (
    <Container key={size.value}>
      <Background resizeMode={'contain'}
        source={size.selected ? selected : notSelected}
      >
        <TextSelect style={size.selected ? { color: 'white'} : {}}>
          {size.value}
        </TextSelect>
      </Background>
    </Container>
  )
}

export default Sizes

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
const TextSelect = styled.Text`
  color: #a2a2a2;
  font-family: ${fonts.boldFont};
  font-size: 14;
`