import { createStackNavigator } from 'react-navigation';

import InspirationHome from '../../screens/Inspiration/Home';
import Life from '../../screens/Inspiration/Life';
import LifeDetailScreen from '../../screens/Inspiration/LifeDetails';
import Fashion from '../../screens/Inspiration/Fashion';
import FashionDetailScreen from '../../screens/Inspiration/FashionDetail';
import Video from '../../screens/Inspiration/Videos';

export default createStackNavigator({
  InspirationHome,
  Video,
  Fashion,
  FashionDetailScreen,
  Life,
  LifeDetailScreen,
  
})