import { combineReducers } from 'redux';

import authReducer from './authReducer';
import productReducer from './productReducer';
import componentReducer from './componentReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  auth: authReducer,
  product: productReducer,
  component: componentReducer,
  cart: cartReducer
})