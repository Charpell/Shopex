import React, { Component } from 'react'
import { Text, View } from 'react-native'
import YouTube from 'react-native-youtube'
import styled from 'styled-components';

import InspirationHeader from '../../components/InspirationHeader';
import Line from '../../components/Line';
import { videoData } from '../../data/inspiration'

export default class Videos extends Component {
  state = {
    videos: []
  }

  play = (video, index) => {
    this.videos[index].play = !this.videos[index].play
    this.setState({})
  }

  renderVideos = (video, index) => {
    <VideoListItem key={index}>
      <VideoListImage source={video.thumb}>
        <VideoContainer onPress={() => { this.play(video, index)}}>
          <PlayButton source={require('../../assets/images/icon-play.png')} />
        </VideoContainer>
      </VideoListImage>
    </VideoListItem>
  }

  render() {
    return (
      <Container>
        <Body>
          <Line width={72} />
            <InspirationHeader leftText={'V'} rightText={'IDEOS'} navigation={this.props.navigation} close={true} />
          <Line width={72} />
          <VideoList>
            {videoData.map((video, index) => 
              (this.renderVideos(video, index)))}
          </VideoList>
        </Body>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1
`
const Body = styled.View`
  background: rgba(0,0,0,0.40);
  height: 100%;
  width: 100%
`
const VideoList = styled.ScrollView`
  flex-direction: column;
  padding: 20px;
  margin-top: 30;
`
const VideoListItem = styled.View`
  height: 135;
  margin-bottom: 10;
`
const VideoListImage = styled.Image`
  height: 100%;
  width: 100%
`
const VideoContainer = styled.TouchableOpacity`
  background: rgba(0,0,0,0.40);
  height: 100%;
  width: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
`
const PlayButton = styled.Image`
  width: 32;
  height: 32
`