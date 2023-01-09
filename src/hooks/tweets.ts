import { useAppDispatch, username } from '@root/utils/commons'
import { useEffect, useMemo, useState } from 'react'
import useDebounce from 'react-use/lib/useDebounce'

import { tweetsActions } from '@root/store/tweets/action'
import { useSelector } from 'react-redux'
import {
  tweetSelector,
  tweetsSelector,
  tweetsStateSelector,
} from '@root/store/tweets/selector'
import { ApplicationState } from '@root/store'

export const useTweetsActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => tweetsActions(dispatch), [dispatch])
}

export const useTweetsState = () => {
  return useSelector(tweetsStateSelector)
}

export const useTweets = () => {
  return useSelector(tweetsSelector)
}

export const useTweet = (id: string) => {
  return useSelector((state: ApplicationState) => tweetSelector(state, id))
}

export const useGetTweets = () => {
  const { getTweets } = useTweetsActions()

  const [loading, setLoading] = useState(true)

  /* This should go inside a useEffect,
    because of the number of requests per second I added a useDebounce 
  */
  useDebounce(
    () => {
      getTweets({ username, limit: 15 })
        .then(() => setLoading(false))
        .catch(() => setLoading(false))
        .finally(() => setLoading(false))
    },
    2000,
    []
  )

  return useMemo(() => {
    loading
  }, [loading])
}

export const useGetMoreTweets = () => {
  const { getMoreTweets } = useTweetsActions()
  const tweetsState = useTweetsState()

  const [loading, setLoading] = useState(false)

  /* This should go inside a useEffect,
    because of the number of requests per second I added a useDebounce 
  */

  const onEndReached = () => {
    setLoading(true)
    getMoreTweets({
      username,
      limit: 15,
      continuation_token: tweetsState.continuationToken,
    })
      .then(() => setLoading(false))
      .catch(() => setLoading(false))
      .finally(() => setLoading(false))
  }

  return { loading, onEndReached }
}
