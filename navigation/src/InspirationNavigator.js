import { createStackNavigator } from 'react-navigation';

import Home from '../../screens/Inspiration/Home';
import Life from '../../screens/Inspiration/Life';
import LifeDetailScreen from '../../screens/Inspiration/LifeDetails';
import Fashion from '../../screens/Inspiration/Fashion';
import FashionDetailScreen from '../../screens/Inspiration/FashionDetail';
import Video from '../../screens/Inspiration/Videos';

export default createStackNavigator({
  Home,
  Video,
  Fashion,
  FashionDetailScreen,
  Life,
  LifeDetailScreen,
  
})