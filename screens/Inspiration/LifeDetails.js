import React from 'react'
import styled from 'styled-components'
import { Dimensions } from 'react-native';

import InspirationHeader from '../../components/InspirationHeader';
import { fonts, colors } from '../../utils'
const { width } = Dimensions.get('window')

const LifeDetails = ({ navigation }) => {
  const item = navigation.getParam('item')

  return (
    <Container>
      <InspirationHeader leftText={''} rightText={''} navigation={navigation} back={true} close={true} />
      <ScrollContainer showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <Date>
          <DateText>{item.date}</DateText>
        </Date>
        <Title>
          <TitleText>{item.title}</TitleText>
        </Title>
        <ImageContainer>
          <ImageDetail source={item.image} resizeMode={'contain'} />
        </ImageContainer>
        <ContentContainer>
          <ContentText>{item.description}</ContentText>
        </ContentContainer>
      </ScrollContainer>
    </Container>
  )
}

export default LifeDetails

const Container = styled.View`
  flex: 1;
  background: white;
`
const ScrollContainer = styled.ScrollView``

const Date = styled.View`
  align-items: center;
  color: ${colors.secondaryColor}
`
const DateText = styled.Text`
  font-size: 15;
  color: white;
  font-family: ${fonts.lightFont}
`
const Title = styled.View`
  align-items: center;
  margin: 15px 0px;
  color: ${colors.secondaryColor}
`
const TitleText = styled.Text`
  font-size: 30;
  color: white;
  font-family: ${fonts.anticFont};
  text-align: center;
`
const ImageContainer = styled.View`
  align-items: center;
`
const ImageDetail = styled.Image`
  width: ${width - 80};
  height: 200;
  border-radius: 0
`
const ContentContainer = styled.View`
  margin-top: 10
`
const ContentText = styled.Text`
  color: ${colors.secondaryColor};
  font-size: 15;
  font-family: ${fonts.regularFont};
  padding: 20px;
  text-align: left;
  line-height: 20px;
  padding-top: 5px
`