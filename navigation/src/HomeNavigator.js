import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../../screens/Home/home';
import MenCategory from '../../screens/Store/mencategory';
import WomenCategory from '../../screens/Store/womencategory';

export default createStackNavigator({
  WomenCategory
,
  MenCategory,

  HomeScreen,
})