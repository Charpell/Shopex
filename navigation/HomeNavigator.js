import { createDrawerNavigator } from 'react-navigation';

import SideBar from '../components/SideBar';
import HomeScreen from '../screens/HomeScreen';

export default createDrawerNavigator({
  SideBar,
  HomeScreen
})