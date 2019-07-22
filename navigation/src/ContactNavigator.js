import { createStackNavigator } from 'react-navigation';

import Home from '../../screens/Contact/home';
import ContactScreen from '../../screens/Contact/contact';
import FeedbackScreen from '../../screens/Contact/feedback';

export default createStackNavigator({
  FeedbackScreen,
  ContactScreen,
  Home
})