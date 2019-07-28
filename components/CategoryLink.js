import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';

import { fetchProductsInCategory } from '../store/actions/productAction';
import { fonts, colors } from '../utils'

const CategoryLink = ({ category, fetchProductsInCategory }) => {
  console.log('category', category)
  return (
    <Container
      onPress={() => fetchProductsInCategory(category.id)}
    >
      <MainText 
        style={ category.current ? { color: 'rgba(246,150,108,0.8)' } : {} }
      >{category.name}
        </MainText>
    </Container>
  )
}

export default connect(null, {fetchProductsInCategory})(CategoryLink)

const Container = styled.TouchableOpacity`
  height: 60;
  padding: 13px 10px;
`
const MainText = styled.Text`
  color: ${colors.secondaryColor};
  font-family: ${fonts.regularFont};
  font-size: 14;
  text-align: center;
  padding: 0px 5px;
`