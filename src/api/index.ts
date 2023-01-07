import { API_URL } from '@env'
import Axios from 'axios'

export const apiUrl = Axios.create({
  baseURL: API_URL,
})

apiUrl.defaults.headers.Accept = 'application/json'
apiUrl.defaults.headers['Content-Type'] = 'application/json'
