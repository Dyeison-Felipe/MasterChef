import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://master-chef-api-pi.vercel.app/',
});
