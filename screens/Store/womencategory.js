import React, { Component } from 'react'
import styled from 'styled-components'

import LogoImage from '../../components/LogoImage';
import BackButton from '../../components/BackButton'
import { products, categories, categoryLink } from '../../data/home'
import ProductCard from '../../components/ProductCard'
import CategoryLink from '../../components/CategoryLink'
import { fonts, colors, headerStyle } from '../../utils'

export default class Category extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle,
    headerTitle: <LogoImage />,
    headerLeft: <BackButton navigation={navigation} />
  })

  render() {
    const { navigation } = this.props
    const womenCategory = categories[1]

    return (
      <Container>
        <Banner style={{ backgroundColor: womenCategory.backgroundColor }}>
          <BannerText>{womenCategory.text}</BannerText>
          <BannerSubText>{womenCategory.subtext}</BannerSubText>
        </Banner>

        <HorizontalSlider>
          <Scroll pagingEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              categoryLink.map((category, index) => (
                <CategoryLink navigation={navigation} key={'category' + index} category={category} />
              ))
            }
          </Scroll>
        </HorizontalSlider>

        <Scroll showsVerticalScrollIndicator={false}>
          {products.map((product, index) => (
            <ProductCard navigation={navigation} key={'product' + index} product={product} />
          ))}
        </Scroll>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  background: #FFFFFFFF;
  flex-direction: column;
`
const Banner = styled.View`
  width: 100%;
  height: 80;
  align-items: center;
`
const BannerText = styled.Text`
  font-family: ${fonts.extraLightFont};
  color: white;
  text-align: center;
  margin-bottom: 2;
  font-size: 50;
  line-height: 50;
  position: absolute;
  top: 16
`
const BannerSubText = styled.Text`
  font-family: ${fonts.extraLightFont};
  color: white;
  font-size: 20.5;
  text-align: center;
  position: absolute;
  bottom: 9
`
const HorizontalSlider = styled.View`
  width: 100%;
  height: 40;
  background: ${colors.backgroundColor};
`

const Scroll = styled.ScrollView`
`
