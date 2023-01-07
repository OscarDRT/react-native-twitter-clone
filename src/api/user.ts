import { apiUrl } from '.'

export const getUser = () => {
  return new Promise(async (res, rej) => {
    try {
      const { data } = await apiUrl.get('/api/user')
      res(data)
    } catch (error) {
      rej(error)
    }
  })
}
