import React from 'react'
import styled from 'styled-components'

import InspirationText from '../components/InspirationText'
import BackButton from '../components/BackButton';
import Line from '../components/Line';
import { fonts, colors } from '../utils';

const InspirationHeader = (props) => {
  return (
    <Container>
      <LeftButton>
        {props.back && <BackButton navigation={props.navigation} />}
      </LeftButton>
      <TitleContainer>
        {
          props.headerTitle ? <HeaderTitle>{props.headerTitle}</HeaderTitle> :
            <MView>
              <Line width={props.width} />
              <InspirationText  strongText={props.leftText} restLetters={props.rightText} />
              <Line width={props.width} />
            </MView>
        }
      </TitleContainer>
      <CloseContainer>
        {
          props.close && 
          <CloseButton>
            <CloseImage 
              resizeMode={'contain'}
              source={require('../assets/images/icon-close-black.png')}
            />
          </CloseButton>
        }
      </CloseContainer>
    </Container>
  )
}

export default InspirationHeader

const Container = styled.View`
  height: 80;
  width: 100%;
  padding-top: 50;
  flex-direction: row;
  padding-left: 0px;
  padding-right: 0px
`
const LeftButton = styled.View`
  flex: 0.33;
  align-items: flex-start;
  padding-left: 5
`
const TitleContainer = styled.View`
  flex: 0.33;
  align-items: center;
  margin-top: 4;
  padding-left: 20;
`
const HeaderTitle = styled.Text`
  font-size: 18;
  color: ${colors.secondaryColor};
  font-family: ${fonts.anticFont};
  margin-top: -4px;
`
const CloseContainer = styled.View`
  flex: 0.33;
  align-items: flex-end;
  padding-right: 20;
`
const CloseButton = styled.TouchableOpacity``
const CloseImage = styled.Image`
  width: 25px;
  height: 25px
`

const MView = styled.View``