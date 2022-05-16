import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/reducer'
import menuReducer from './menu/reducer'
import academicReducer from './academic/reducer'
import studentRegistrationReducer from './studentRegistration/reducer'
import financeReducer from './finance/reducer'
import fms from './fms/reducer'
import leaveReducer from './Leave/reducer'
import reportReducer from './report/reducer'
import lessonReducer from './lesson/reducer'

const initialState = {}

const rootReducer = {
  user: userReducer,
  menu: menuReducer,
  acamedic: academicReducer,
  studentRegistration: studentRegistrationReducer,
  finance: financeReducer,
  fms: fms,
  leave: leaveReducer,
  report: reportReducer,
  lesson: lessonReducer
}

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
