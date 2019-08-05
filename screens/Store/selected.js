import React, { Component } from 'react'
import {  Text, View } from 'react-native'
import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import LogoImage from '../../components/LogoImage';
import MenuButton from '../../components/MenuButton';
import { headerStyle } from '../../utils';


export default class SelectedStore extends Component {
  static navigationOptions = ({ navigation}) => ({
    headerStyle,
    headerTitle: <LogoImage />,
    headerLeft: <MenuButton navigation={navigation} />
  })

  render() {
    return (
      <Container>
         <MapView style={{ width: '100%', height: '30%' }} />
         <NavBar>
          <Text style={{ fontSize: 20 }}>NEARBY STORES</Text>
        </NavBar>
        <CardDetails>
            <Shipping>
                <View>
                  <Title>Storex Northlake Mall</Title>
                  <SubText>Walking distance: 4 min</SubText>            
                </View>
                <Feather name="navigation" size={30} style={{ marginLeft: 30 }} />
                <Text>3.4 KM</Text>
            </Shipping>
            <Shipping style={{ backgroundColor: 'yellow' }}>
                <View>
                  <Title>Storex Northlake Mall</Title>
                  <SubText>Walking distance: 4 min</SubText>            
                </View>
                <Feather name="navigation" size={30} style={{ marginLeft: 30 }} />
                <Text>3.4 KM</Text>
            </Shipping>
            <Shipping>
                <View>
                  <Title>Storex Northlake Mall</Title>
                  <SubText>Walking distance: 4 min</SubText>            
                </View>
                <Feather name="navigation" size={30} style={{ marginLeft: 30 }} />
                <Text>3.4 KM</Text>
            </Shipping>
            
          </CardDetails>
      </Container>
    )
  }
}


const Container = styled.View`
  flex: 1;
  background-color: #FFFFFF;
`

const NavBar = styled.View`
  height: 100px;
  justify-content: center;
  align-items: center;
`

const CardDetails = styled.ScrollView`
  /* margin-top: 30px; */
`

const Shipping = styled.View`
  border-width: 1;
  border-color: #b8bece;
  height: 100px;
  color: #3c4560;
  align-items: center;
  justify-content: space-between;
  margin: 0px 5px;
  flex-direction: row;
  padding: 0px 20px;
`;

const Title = styled.Text`
  font-size: 18px;
`

const SubText = styled.Text`
  color: #b8bece;
  font-size: 18px;
  margin-top: 10px;
`
