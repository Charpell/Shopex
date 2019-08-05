import { createStackNavigator } from 'react-navigation';

import InspirationHome from '../../screens/Inspiration/Home';
import LifeScreen from '../../screens/Inspiration/Life';
import LifeDetailScreen from '../../screens/Inspiration/LifeDetails';
import FashionScreen from '../../screens/Inspiration/Fashion';
import FashionDetailScreen from '../../screens/Inspiration/FashionDetail';
import VideoScreen from '../../screens/Inspiration/Videos';

export default createStackNavigator({
  InspirationHome,
  VideoScreen,
  FashionScreen,
  FashionDetailScreen,
  LifeScreen,
  LifeDetailScreen,
  
})