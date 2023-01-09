type Tweet = {
  tweet_id: string
  creation_date: string
  text: string
  media_url: string[]
  video_url?: any
  user: User
  language: string
  favorite_count: number
  retweet_count: number
  reply_count: number
  quote_count: number
  retweet: boolean
  views?: any
  timestamp: number
  video_view_count?: number
}

type TweetsResponse = {
  results: Tweet[]
  continuation_token: string
}
