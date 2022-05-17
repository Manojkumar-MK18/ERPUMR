import { UserState, ValidationError } from './typings'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { validateUsername, validatePassword } from 'helpers/formValidation'
import { handleAuthenticate } from './api'

export const initialState: UserState = {
  isLoggedIn: false,
  isLoading: false,
  userName: '',
  password: '',
  error: '',
  userNameError: '',
  passwordError: '',
  userInfo: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateLoader: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    updateIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload
    },
    updateError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    updateUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload
      state.userNameError = validateUsername(action.payload)
    },
    updatePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
      state.passwordError = validatePassword(action.payload)
    },
    clearError: (state) => {
      state.passwordError = ''
      state.userNameError = ''
      state.isLoggedIn = true
      state.isLoading = false
    },
    updateFormError: (state, action: PayloadAction<ValidationError>) => {
      state.userNameError = action.payload?.userNameError || ''
      state.passwordError = action.payload?.passwordError || ''
      state.isLoading = false
    }
  },
  extraReducers: {
    [handleAuthenticate.fulfilled.toString()]: (state, action) => {
      state.isLoading = false
      state.isLoggedIn = action.payload
      state.userInfo = action.payload
    },
  }
})

export default userSlice.reducer
