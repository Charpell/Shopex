import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/actionTypes';

import { loginState } from './initialState';

const authReducer = (state = loginState, action) => {
  switch(action.type) {
    case LOGIN_LOADING:
      return { ...state, isLoading: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: action.payload };
    case LOGIN_FAILURE:
    return { ...state, error: action.payload }
    default:
      return state
  }
}

export default authReducer;