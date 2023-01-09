import { apiUrl } from '.'

const getTweets = (params: { username: string; limit: number }) => {
  return apiUrl.get<TweetsResponse>('/user/tweets', {
    params,
  })
}

const getMoreTweets = (params: {
  username: string
  limit: number
  continuation_token: string
}) => {
  return apiUrl.get<TweetsResponse>('/user/tweets/continuation', {
    params,
  })
}

export { getTweets, getMoreTweets }
