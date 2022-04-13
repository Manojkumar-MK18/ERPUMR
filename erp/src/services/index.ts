import axios from 'axios'
import ROUTES from '../const/routes'

const getAccessToken = () => sessionStorage.getItem('umr-token')

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    Accept: 'application/json'
  }
})

api.interceptors.request.use(
  function (config) {
    config.headers['access_token'] = getAccessToken()
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error: any) => {
    if (
      error?.response?.status === 401 &&
      window.location.pathname !== ROUTES.LOGIN
    ) {
      window.location.reload()
    }
    return Promise.reject(error)
  }
)

export default api
