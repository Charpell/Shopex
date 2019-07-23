import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components';

import BackButton from '../../components/BackButton';
import { colors, fonts, headerStyle, headerTitleStyle } from '../../utils';


export default class service extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle,
    headerTitleStyle,
    headerTitle: 'SHOPPING AT STOREX',
    headerLeft: <BackButton navigation={navigation} />,
  })

  render() {
    return (
      <Container>
        <ScrollView>
          <TitleText>How to shop</TitleText>
          <BodyText>
            Donec finibus molestie sapien sit amet tincidunt. Nunc ultrices nisl ante, ac ullamcorper dolor pulvinar sit amet. Sed quis tincidunt nunc. Pellentesque eget turpis quam. Vivamus faucibus quam enim. Vestibulum gravida mauris at sollicitudin blandit.
            Donec urna nibh, vulputate commodo mauris et, porttitor porttitor mauris. Integer sit amet arcu sit amet massa efficitur vestibulum.
            Curabitur aliquet tellus ut libero posuere, ut maximus ipsum fermentum.
            Donec finibus molestie sapien sit amet tincidunt. Nunc ultrices nisl ante, ac ullamcorper dolor pulvinar sit amet. Sed quis tincidunt nunc. Pellentesque eget turpis quam. Vivamus faucibus quam enim. Vestibulum gravida mauris at sollicitudin blandit.
            Donec urna nibh, vulputate commodo mauris et, porttitor porttitor mauris. Integer sit amet arcu sit amet massa efficitur vestibulum.
            Curabitur aliquet tellus ut libero posuere, ut maximus ipsum fermentum.
          </BodyText>
        </ScrollView>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background: white;
  padding: 15px;
`
const TitleText = styled.Text`
  color: ${colors.secondaryColor};
  font-size: 14;
  line-height: 17;
  font-family: ${fonts.boldFont};
  margin-top: 15px;
  margin-bottom: 5px;
`
const BodyText = styled.Text`
  color: #999;
  font-size: 13;
  line-height: 17;
  font-family: ${fonts.regularFont}
`
