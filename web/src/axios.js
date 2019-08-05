import axios from 'axios';

const instance = axios.create({
  baseURL: 'localhost:8000'
});

export default instance;
