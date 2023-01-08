import { apiUrl } from '.'

export const getUser = (params?: { username: string }) => {
  return new Promise(async (res, rej) => {
    try {
      const { data } = await apiUrl.get('/user/details', {
        params,
      })
      res(data)
    } catch (error) {
      rej(error)
    }
  })
}
