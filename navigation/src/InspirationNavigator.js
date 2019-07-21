import { createStackNavigator } from 'react-navigation';

import Home from '../../screens/Inspiration/Home';
import Life from '../../screens/Inspiration/Life';
import LifeDetailScreen from '../../screens/Inspiration/LifeDetails';

export default createStackNavigator({
  
  Life,
  LifeDetailScreen,
  Home
})