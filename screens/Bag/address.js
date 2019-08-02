import React, { Component } from 'react'
import styled from 'styled-components';

import BackButton from '../../components/BackButton'
import LogoImage from '../../components/LogoImage'
import BagHeader from '../../components/BagHeader';

import {fonts, colors, headerStyle, headerTitleStyle} from '../../utils';


export default class address extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle,
    headerTitle: <LogoImage />,
    headerLeft: <BackButton navigation={navigation} />,
  })

  render() {
    return (
      <Container>
        <BagHeader current={0} />
        <PageContent>
          <Sc
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <TwoColumn>
              <FormGroup>
                <FormInput 
                  placeholderTextColor={colors.secondaryColor}
                  placeholder={'First name'}
                  autoCorrect={false}
                />
              </FormGroup>
              <FormGroup>
                <FormInput 
                  placeholderTextColor={colors.secondaryColor}
                  placeholder={'Last Name'}
                  autoCorrect={false}
                />
              </FormGroup>
            </TwoColumn>
            <FormGroup>
              <FormInput 
                placeholderTextColor={colors.secondaryColor}
                placeholder={'Address Line 1'}
                autoCorrect={false}
              />
            </FormGroup>
            <FormGroup>
              <FormInput 
                placeholderTextColor={colors.secondaryColor}
                placeholder={'Address Line 2'}
                autoCorrect={false}
              />
            </FormGroup>
            <TwoColumn>
              <FormGroup>
                <FormInput 
                  placeholderTextColor={colors.secondaryColor}
                  placeholder={'City'}
                  autoCorrect={false}
                />
              </FormGroup>
              <FormGroup>
                <FormInput 
                  placeholderTextColor={colors.secondaryColor}
                  placeholder={'State'}
                  autoCorrect={false}
                />
              </FormGroup>
            </TwoColumn>
            <TwoColumn>
              <FormGroup>
                <FormInput 
                  placeholderTextColor={colors.secondaryColor}
                  placeholder={'Zip Code'}
                  autoCorrect={false}
                />
              </FormGroup>
              <FormGroup>
                <FormInput 
                  placeholderTextColor={colors.secondaryColor}
                  placeholder={'Country'}
                  autoCorrect={false}
                />
              </FormGroup>
            </TwoColumn>
            <SaveButtonContainer>
              <SaveButton
                onPress={() => this.props.navigation.navigate('Payment')}
              >
                <SaveText>{'SAVE AND CONTINUE'}</SaveText>
              </SaveButton>
            </SaveButtonContainer>
          </Sc>
        </PageContent>
      </Container>
    )
  }
}

const Container = styled.View`
`
const Sc = styled.ScrollView`
`
const TwoColumn = styled.View`
  flex-direction: row;
  /* flex: 0.5; */
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
  flex: 0.5
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
  margin-top: 200px
`
const SaveButton = styled.TouchableOpacity`
  background: #696969;
  justify-content: flex-start;
  align-items: center;
  height: 80;
  padding: 20px
`
const SaveText = styled.Text`
  color: white;
  font-family: ${fonts.boldFont};
  font-size: 20;
  letter-spacing: 3;
  text-align: center;
  font-weight: 600;
`
