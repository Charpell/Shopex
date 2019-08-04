import React from 'react'
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import { openFilterMenu } from '../store/actions/componentAction';

export const FilterButton = ({ openFilterMenu }) => {
  return (
    <Container
      onPress={() => openFilterMenu()}
    >
      <FilterImage source={require('../assets/images/icon-funnel.png')} />
    </Container>
  )
}

export default connect(null, { openFilterMenu })(FilterButton)

const Container = styled.TouchableOpacity`
  width: 100;
  height: 20;
  align-items: center;
  justify-content: center;
  padding-right: 15px;
  margin-right: -40px
`
const FilterImage = styled.Image`
  width: 17;
  height: 17;
`