import { API_URL } from '@env'
import Axios from 'axios'

export const apiUrl = Axios.create({
  baseURL: 'https://twitter154.p.rapidapi.com',
})

apiUrl.defaults.headers['X-RapidAPI-Host'] = 'twitter154.p.rapidapi.com'
apiUrl.defaults.headers['X-RapidAPI-Key'] =
  'e53aa63960msh47746e295d3c738p1a55c0jsn82d031dc825b'
