import axios from 'axios';
import configAxios from '../../helpers/configAxios';

import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

export const loginLoading = isLoading => ({
  type: LOGIN_LOADING,
  payload: isLoading,
});

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});


export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: error,
});


export const login = (email, password) => dispatch => {
  let data = JSON.stringify({
    email, password
  })
  dispatch(loginLoading(true))

  return axios.post('https://mobilebackend.turing.com/customers/login', data, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
    .then(response => {
      console.log('response', response)
      dispatch(loginSuccess(response.data.user))
      dispatch(loginLoading(false))
    })
    .catch(error => {
      dispatch(loginLoading(false))
      dispatch(loginFailure(error))
    })
}