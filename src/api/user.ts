import { apiUrl } from '.'

const getUser = (params: { username: string }) => {
  return apiUrl.get<User>('/user/details', {
    params,
  })
}

export { getUser }
