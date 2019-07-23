import { createStackNavigator } from 'react-navigation';

import Home from '../../screens/Contact/home';
import ContactScreen from '../../screens/Contact/contact';
import FeedbackScreen from '../../screens/Contact/feedback';
import CustomerServiceScreen from '../../screens/Contact/customerservice';

export default createStackNavigator({
  CustomerServiceScreen,
  FeedbackScreen,
  ContactScreen,
  Home
})