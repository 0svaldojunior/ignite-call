import axios from 'axios'

export const api = axios.create({
  baseURL: '/api',
})

api.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json'
  config.data = JSON.stringify(config.data)
  return config
})

api.interceptors.response.use((response) => {
  return response
})
