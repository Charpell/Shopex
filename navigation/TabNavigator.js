import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import LandingScreen from '../screens/LandingScreen'
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';

const Navigator = createSwitchNavigator({
  LandingScreen,

  AuthNavigator,

  HomeNavigator,

})

export default createAppContainer(Navigator)