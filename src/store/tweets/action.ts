import { getMoreTweets, getTweets } from '@root/api/tweets'
import { AppDispatch } from '..'
import { actions as actionsSlice } from './index'

export const tweetsActions = (dispatch: AppDispatch) => {
  const actions = {
    setContinuationToken: (params: { continuationToken: string }) => {
      return dispatch(
        actionsSlice.setContinuationToken(params.continuationToken)
      )
    },
    setIsTweetsActive: (params: { isTweetsActive: boolean }) => {
      return dispatch(actionsSlice.setIsTweetsActive(params.isTweetsActive))
    },

    setTweets: (params: { response: TweetsResponse }) => {
      return dispatch(actionsSlice.setTweets(params.response))
    },

    getTweets(params: { username: string; limit: number }) {
      return getTweets(params).then(res => {
        if (res.status === 200) {
          actions.setIsTweetsActive({ isTweetsActive: true })
          actions.setTweets({ response: res.data })
        }
        return res
      })
    },
    getMoreTweets(params: {
      username: string
      limit: number
      continuation_token: string
    }) {
      return getMoreTweets(params).then(res => {
        if (res.status === 200) {
          actions.setTweets({ response: res.data })
        }
        return res
      })
    },
  }
  return actions
}
