import axios from 'axios';

const persistRoot = localStorage.getItem('persist:root');
const BASE_URL = 'https://primeiecomm.herokuapp.com/api/';
let TOKEN = null;
if (persistRoot) {
  TOKEN = JSON.parse(
    JSON.parse(localStorage.getItem('persist:root'))?.user
  )?.token;
} else {
  TOKEN = null;
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
