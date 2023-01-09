import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'

export interface tweetsState {
  tweets: { [key: string]: Tweet }
  continuationToken: string
  isTweetsActive: boolean
}

const initialState: tweetsState = {
  tweets: {},
  continuationToken: '',
  isTweetsActive: false,
}

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    setIsTweetsActive(state, action: PayloadAction<boolean>) {
      state.isTweetsActive = action.payload
    },
    setContinuationToken(state, action: PayloadAction<string>) {
      state.continuationToken = action.payload
    },
    setTweets(state, action: PayloadAction<TweetsResponse>) {
      state.continuationToken = action.payload.continuation_token
      state.tweets = action.payload.results.reduce(
        (accumulator, value) => {
          accumulator[value.tweet_id] = value
          return accumulator
        },
        { ...state.tweets }
      )
    },
    setTweet(state, action: PayloadAction<Tweet>) {
      state.tweets = {
        [action.payload.tweet_id]: action.payload,
        ...current(state.tweets),
      }
    },
  },
})

export const tweetsReducer = tweetsSlice.reducer
export const actions = tweetsSlice.actions
