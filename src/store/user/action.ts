import { getUser } from '@root/api/user'
import { AppDispatch } from '..'
import { actions as actionsSlice } from './index'

export const userActions = (dispatch: AppDispatch) => {
  const actions = {
    setUser: (params: { user: User }) => {
      return dispatch(actionsSlice.setUser(params))
    },
    getUser(params: { username: string }) {
      return getUser(params).then(res => {
        if (res.status === 200) {
          actions.setUser({ user: res.data })
        }
        return res
      })
    },
  }
  return actions
}
