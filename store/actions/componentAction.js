import { CLOSE_FILTER_MENU, OPEN_FILTER_MENU } from './actionTypes';

export const closeFilterMenu = () => dispatch => {
  return dispatch({
    type: CLOSE_FILTER_MENU,
    payload: false
  })
}

export const openFilterMenu = () => dispatch => {
  return dispatch({
    type: OPEN_FILTER_MENU,
    payload: true
  })
}