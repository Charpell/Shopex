import { CLOSE_FILTER_MENU, OPEN_FILTER_MENU } from '../actions/actionTypes';

import { components } from './initialState';

const componentReducer = (state = components, action) => {
  switch(action.type) {
    case CLOSE_FILTER_MENU:
      return { ...state, filterMenu: action.payload };
    case OPEN_FILTER_MENU:
      return { ...state, filterMenu: action.payload };
    default:
      return state
  }
}

export default componentReducer;