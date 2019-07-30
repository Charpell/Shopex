import axios from 'axios';

import { retrieveToken } from '../helpers/AsyncStorage';

let token;


const configAxios = token => {
  axios.defaults.baseURL = 'https://mobilebackend.turing.com';
  axios.defaults.headers.Authorization = `Bearer ${token}` || "";
  headers = { 'Accept': 'application/json', 'Content-Type': 'application/json'}
}

export default configAxios;