import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-master-chef.onrender.com/',
});
