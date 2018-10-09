import axios from 'axios'

const API_URL = 'http://localhost:3000'

export const api = axios.create({
  baseURL: API_URL
})
