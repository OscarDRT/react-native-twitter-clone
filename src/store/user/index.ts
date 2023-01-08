import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface userState {
  user?: User
  isSessionActive: boolean
}

const initialState: userState = { isSessionActive: false }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ user: User }>) {
      state.user = action.payload.user
      state.isSessionActive = true
    },
  },
})

export const userReducer = userSlice.reducer
export const actions = userSlice.actions
