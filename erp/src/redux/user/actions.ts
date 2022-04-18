import { userSlice } from './reducer'
import {handleAuthenticate} from './api'

const {
  updateIsLoggedIn,
  updateUserName,
  updatePassword,
  updateError,
  clearError,
  updateFormError,
  updateLoader
} = userSlice.actions

export {
  updateIsLoggedIn,
  updateUserName,
  updatePassword,
  updateError,
  clearError,
  updateFormError,
  handleAuthenticate,
  updateLoader
}
