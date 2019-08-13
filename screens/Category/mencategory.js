import React, { Component } from 'react'
import styled from 'styled-components/native'
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay'

import LogoImage from '../../components/LogoImage';
import HomeButton from '../../components/HomeButton'
import FilterButton from '../../components/FilterButton'
import Modal from './modal';
import { products, categories, categoryLink } from '../../data/home'
import ProductCard from '../../components/ProductCard'
import CategoryLink from '../../components/CategoryLink'
import { fonts, colors, headerStyle } from '../../utils'
import { fetchProducts } from '../../store/actions/productAction';

export class Category extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle,
    headerTitle: <LogoImage />,
    headerLeft: <HomeButton navigation={navigation} />,
    headerRight: <FilterButton navigation={navigation} />
  })

  componentDidMount() {
    this.props.fetchProducts()
  }

  renderCard = () => {
    return (
      this.props.products.products.map((product, index) => (
        <ProductCard 
            key={index}
            product={product}
            navigation={this.props.navigation}
            image={require('../../assets/data/ja1.jpg')}
          />
      ))
    )
  }

  render() {
    const { navigation } = this.props
    const menCategory = categories[0]

    if(this.props.products.isLoading) {
      return (
        <View>
          <Spinner 
            visible={this.props.products.isLoading}
            textContent={"Loading..."}
            animation="fade"
          />
        </View>
      )
    }

    return (
      <Container>
        <Modal />
        <Banner style={{ backgroundColor: menCategory.backgroundColor }}>
          <BannerText>{menCategory.text}</BannerText>
          <BannerSubText>{menCategory.subtext}</BannerSubText>
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
          {this.renderCard()}
        </Scroll>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  products: state.product
})

export default connect(mapStateToProps, { fetchProducts })(Category)

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
