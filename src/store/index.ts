import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit'

import { userReducer, userState } from './user'
import { tweetsReducer, tweetsState } from './tweets'

export interface ApplicationState {
  user: userState
  tweets: tweetsState
}

const rootPersistConfig = {
  key: 'root',
  whitelist: [],
  storage: AsyncStorage,
}

const rootApplicationReducerMap = {
  user: userReducer,
  tweets: tweetsReducer,
}

export const rootReducer: Reducer = combineReducers<ApplicationState>(
  rootApplicationReducerMap
)

const persistedReducer = persistReducer<ApplicationState>(
  rootPersistConfig,
  rootReducer
)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export const persistor = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
