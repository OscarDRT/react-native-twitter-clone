import { createSelector } from '@reduxjs/toolkit'
import { ApplicationState } from '@root/store'

export const tweetsStateSelector = createSelector(
  ({ tweets }: ApplicationState) => tweets,
  value => value
)

export const tweetsSelector = createSelector(
  ({ tweets }: ApplicationState) => tweets.tweets,
  value => Object.keys(value)
)

export const tweetSelector = createSelector(
  ({ tweets }: ApplicationState) => tweets.tweets,
  (_: any, id: string) => id,
  (data, id) => data[id]
)
