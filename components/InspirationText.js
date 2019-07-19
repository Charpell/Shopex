import React from 'react'
import styled from 'styled-components';

import { colors, fonts } from '../utils'

const InpirationText = ({ strongText, restLetters }) => {
  return (
    <TextContainer>
      <StrongLetter>{strongText}</StrongLetter>
      <RestLetters>{restLetters}</RestLetters>
    </TextContainer>
  )
}

export default InpirationText

const TextContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`
const StrongLetter = styled.Text`
  font-size: 24;
  font-family: ${fonts.lightFont};
  color: ${colors.primaryColor}
`
const RestLetters = styled.Text`
  color: white;
  font-size: 24;
  font-family: ${fonts.lightFont}
`

