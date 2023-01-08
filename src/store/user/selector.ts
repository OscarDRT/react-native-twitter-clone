import { createSelector } from '@reduxjs/toolkit'
import { ApplicationState } from '@root/store'

export const userSelector = createSelector(
  (state: ApplicationState) => state.user.user,
  user => user
)
