import React, { Component } from 'react';
import { Font } from 'expo';
import { View } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './store/reducers/rootReducer'
import TabNavigator from './navigation/TabNavigator';

const store = createStore(rootReducer, 
  compose(applyMiddleware(thunk))  
)

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'SourceSansPro-ExtraLight': require('./assets/fonts/SourceSansPro-ExtraLight.ttf'),
      'SourceSansPro-Light': require('./assets/fonts/SourceSansPro-Light.ttf'),
      'SourceSansPro-Bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
      'SourceSansPro-SemiBold': require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
      'SourceSansPro-Regular': require('./assets/fonts/SourceSansPro-Regular.ttf'),
      'AnticDidone-Regular': require('./assets/fonts/AnticDidone-Regular.ttf')
    });
    this.setState({ fontLoaded: true })
  }

  render() {
    const { state: { fontLoaded }} = this;
    
    return (
      fontLoaded ? (
        <Provider store={store}>
          <TabNavigator />
        </Provider>)
       : <View />
    )
  }
}
