import { createStackNavigator } from 'react-navigation';

import Home from '../../screens/Home/home';
import CategoryScreen from '../../screens/Home/category';
import FilterScreen from '../../screens/Home/filter';

export default createStackNavigator({
  FilterScreen,
  CategoryScreen,
  Home,
  
})