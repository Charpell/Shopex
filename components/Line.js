import React from 'react'
import styled from 'styled-components/native';

const Line = ({ width }) => {
  return (
    <Container style={{ width }}>

    </Container>
  )
}

export default Line

const Container = styled.View`
  background: white;
  height: 1.5;
  width: 50;
`
