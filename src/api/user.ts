import { apiUrl } from '.'

export const getUser = (params: { username: string }) => {
  return apiUrl.get<User>('/user/details', {
    params,
  })
}
