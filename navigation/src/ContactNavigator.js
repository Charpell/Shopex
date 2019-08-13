import React from "react";
import { createStackNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';


import ContactHome from '../../screens/Contact/home';
import ContactScreen from '../../screens/Contact/contact';
import FeedbackScreen from '../../screens/Contact/feedback';
import CustomerServiceScreen from '../../screens/Contact/customerservice';
import ServiceScreen from '../../screens/Contact/service';

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const ContactNavigator = createStackNavigator({
  ContactHome,
  ServiceScreen,
  CustomerServiceScreen,
  FeedbackScreen,
  ContactScreen,
  
})

ContactNavigator.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <MaterialIcons 
      name="contacts"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
}

export default ContactNavigator
