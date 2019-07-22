import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components';

import BackButton from '../../components/BackButton';
import { fonts, colors, headerStyle, headerTitleStyle } from '../../utils';

export default class feedback extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'SEND A QUESTION',
    headerStyle,
    headerTitleStyle,
    headerLeft: <BackButton navigation={navigation} />

})

  render() {
    return (
      <Container>
        <PageContent>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <FormGroup>
              <FormInput 
                placeholderTextColor={colors.secondaryColor}
                placeholder={'Your Name'}
                autoCorrect={false}
              />
            </FormGroup>
            <FormGroup>
              <FormInput 
                placeholderTextColor={colors.secondaryColor}
                placeholder={'Email'}
                autoCorrect={false}
              />
            </FormGroup>
            <FormGroup>
              <FormInput 
                placeholderTextColor={colors.secondaryColor}
                placeholder={'Phone'}
                autoCorrect={false}
              />
            </FormGroup>
            <FormGroup>
              <FormInput 
                placeholderTextColor={colors.secondaryColor}
                placeholder={'Subject'}
                autoCorrect={false}
              />
            </FormGroup>
            <FormGroup>
              <FormInput 
                placeholderTextColor={colors.secondaryColor}
                placeholder={'Message'}
                multiline={true}
                autoCorrect={false}
                style={{ height: 160 }}
              />
            </FormGroup>
          </ScrollView>
          <SaveButtonContainer>
            <SaveButton>
              <SaveText>{'SEND'}</SaveText>
            </SaveButton>
          </SaveButtonContainer>
        </PageContent>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background: ${colors.backgroundColor};
`
const PageContent = styled.View`
  background: #FFF;
  padding-top: 15;
  height: 100%
`
const FormGroup = styled.View`
  flex-direction: row;
  padding: 15px;
  padding-bottom: 0px;
`
const FormInput = styled.TextInput`
  flex: 1;
  height: 38;
  font-size: 15;
  color: ${colors.secondaryColor};
  line-height: 14;
  padding: 0px 15px;
  font-family: ${fonts.regularFont};
  margin: 0px 5px;
  padding-bottom: 10;
  border-bottom-color: #c3c3c3;
  border-bottom-width: 0.3
`
const SaveButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%
`
const SaveButton = styled.TouchableOpacity`
  background: #FFDEAD;
  justify-content: flex-start;
  align-items: center;
  height: 80;
  padding-top: 20px
`
const SaveText = styled.Text`
  color: white;
  font-family: ${fonts.boldFont};
  font-size: 15;
  letter-spacing: 3;
  text-align: center;
  font-weight: 600;
`
