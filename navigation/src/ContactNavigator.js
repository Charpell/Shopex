import { createStackNavigator } from 'react-navigation';

import Home from '../../screens/Contact/home';
import ContactScreen from '../../screens/Contact/contact';
import FeedbackScreen from '../../screens/Contact/feedback';
import CustomerServiceScreen from '../../screens/Contact/customerservice';
import ServiceScreen from '../../screens/Contact/service';

export default createStackNavigator({
  ServiceScreen,
  CustomerServiceScreen,
  FeedbackScreen,
  ContactScreen,
  Home
})