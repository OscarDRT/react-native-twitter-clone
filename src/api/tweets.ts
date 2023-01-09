import { apiUrl } from '.'

const getTweets = (params: { username: string; limit: number }) => {
  return apiUrl.get<TweetsResponse>('/user/tweets', {
    params,
  })
}

export { getTweets }
