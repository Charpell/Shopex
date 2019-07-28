import React from 'react'
import styled from 'styled-components'

import { fonts, colors } from '../utils'

const ProductCard = ({ navigation, product }) => {
  const { name, thumbnail, id, price, isNew, isSale, discounted_price } = product;
  console.log('thumbnail', thumbnail)

  return (
    <Container onPress={() => navigation.navigate('ProductScreen', { product })}>
      <ImageContainer>
        <ProductImage resizeMode={'contain'} source={thumbnail} />
      </ImageContainer>
      <MainContent>
        <NameContainer>
          <Name>{name}</Name>
        </NameContainer>
        <PriceContainer>
          <Discount>${discounted_price}</Discount>
          <Price>${price}</Price>
        </PriceContainer>
      </MainContent>

      {
        discounted_price == 0 && <NewTagContainer>
          <NewTagText>NEW</NewTagText>
        </NewTagContainer>
      }
      {
        discounted_price > 0 && <SaleTagContainer>
          <SaleTagText>SALE</SaleTagText>
        </SaleTagContainer>
      }
    </Container>
  )
}

export default ProductCard

const Container = styled.TouchableOpacity`
  height: 89;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  flex: 1;
  border-bottom-color: #dedede;
  border-bottom-width: 1;
  padding: 15px 0px;
`
const ImageContainer = styled.View`
  flex: 0.4;
  justify-content: center;
  align-items: center;
`
const ProductImage = styled.View`
  width: 70;
  height: 70;
  background: white;
`
const MainContent = styled.View`
  flex: 0.7
`
const NameContainer = styled.View`
  margin-bottom: 5;
`
const Name = styled.Text`
  color: ${colors.secondaryColor};
  font-size: 15;
  font-family: ${fonts.regularFont};
  text-transform: uppercase;
  max-width: 200;
  line-height: 18
`
const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`
const Price = styled.Text`
  color: ${colors.secondaryColor};
  font-size: 13;
  font-family: ${fonts.boldFont}
`
const Discount = styled.Text`
  text-decoration-line: line-through;
  color: #999999;
  font-size: 13;
  font-family: ${fonts.regularFont};
  margin-right: 5px;
`
const NewTagContainer = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  background: #B0D39B;
  width: 50;
  height: 20;
  justify-content: center;
  align-items: center;
`
const NewTagText = styled.Text`
  color: white;
  font-size: 12;
  font-family: ${fonts.boldFont}
`
const SaleTagContainer = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  background: ${colors.primaryMoreColored};
  width: 50;
  height: 20;
  justify-content: center;
  align-items: center;
`
const SaleTagText = styled.Text`
  color: white;
  font-size: 12;
  font-family: ${fonts.boldFont}
`