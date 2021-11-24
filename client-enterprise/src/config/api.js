import * as cookies from 'js-cookie'
import axios from 'axios'
import uri from './uri'

const baseURL = `${uri}/api`

// Configure Axios
axios.interceptors.request.use(config => {
    config.headers = {
      'x-access-token': cookies.get('token'),
      'domain': sessionStorage.getItem('domain')
      // 'domain': window.location.href.split('.')[0]
    }
    config.baseURL = baseURL
    return config
  }, error => {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(res => {
    return res && res.data
  }, error => {
    return Promise.reject(error && error.response && error.response.data)
  }
)

export default axios