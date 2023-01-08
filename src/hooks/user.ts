import { useAppDispatch, useAppSelector } from '@root/utils/commons'
import { actions } from '@root/store/user'
import { userActions } from '@root/store/user/action'
import { useEffect, useMemo } from 'react'

export const useUserState = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(data => data.user)
  return {
    state,
    actions,
    dispatch,
  }
}

export const useUserActions = () => {
  const dispatch = useAppDispatch()
  return useMemo(() => userActions(dispatch), [dispatch])
}
