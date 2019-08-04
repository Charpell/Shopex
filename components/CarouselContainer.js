import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window')
import { colors, fonts } from '../utils'

export default class CarouselContainer extends Component {
   _renderItem({ item }, navigation ) {
    return (
      <Life key={item.title}>
        <Date>
          <DateText>{item.date}</DateText>
        </Date>
        <Title>
          <TitleText>{item.title}</TitleText>
        </Title>
        <ImageContainer>
          <SampleImage source={item.image} resizeMode={'contain'} />
        </ImageContainer>
        <ReadMore>
          <ReadMoreButton onPress={() => { navigation.navigate('LifeDetailScreen', { item, navigation })}}>
            <ReadMoreText>READ MORE</ReadMoreText>
          </ReadMoreButton>
        </ReadMore>
      </Life>
    )
  }

  render() {
    const { navigation, data } = this.props

    return (
      <Carousel 
        ref={(c) => { this._carousel = c; } }
        data={data}
        renderItem={item => this._renderItem(item, navigation)}
        sliderWidth={width}
        itemWidth={width - 80}
      />
    )
  }
}

const Life = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`
const Date = styled.View`
  align-items: center;
`
const DateText = styled.Text`
  font-size: 15;
  color: white;
  font-family: ${fonts.lightFont}
`
const Title = styled.View`
  align-items: center;
  margin: 15px 0px;
`
const TitleText = styled.Text`
  font-size: 30;
  color: white;
  font-family: ${fonts.anticFont};
  text-align: center;
`
const ImageContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`
const SampleImage = styled.Image`
  width: ${width - 80};
  height: 200;
  border-radius: 0
`
const ReadMore = styled.View`
  margin-top: 40;
  background: #696969
`
const ReadMoreButton = styled.TouchableOpacity`
  background: #FFF;
  height: 30;
  justify-content: center;
  align-items: center;
  width: 120
`
const ReadMoreText = styled.Text`
  font-size: 15;
  color: ${colors.secondaryColor};
  font-family: ${fonts.boldFont}
`