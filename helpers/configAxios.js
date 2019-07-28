import axios from 'axios';

const configAxios = token => {
  axios.defaults.baseURL = 'https://mobilebackend.turing.com';
  axios.defaults.headers.Authorization = `Bearer ${token}` || "";
  headers = { 'Accept': 'application/json', 'Content-Type': 'application/json'}
}

export default configAxios;