import { createStackNavigator } from 'react-navigation';

import StoreHome from '../../screens/Store/home';
import SelectedStore from '../../screens/Store/selected';

export default createStackNavigator({
  SelectedStore,
  StoreHome
})