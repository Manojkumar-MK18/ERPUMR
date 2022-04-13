import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { validateUsername, validatePassword } from 'helpers/formValidation'
import history from '../../const/history'
import ROUTES from '../../const/routes'
import { AuthenticatePayload } from './typings'
import api from 'services'
import apiEndpoints from 'const/apiEndpoints'
import strings from 'locale/en'
import { clearError, updateFormError, updateLoader } from './actions'

const handleAuthenticate = createAsyncThunk(
  'user/authenticate',
  async (
    payload: AuthenticatePayload,
    { getState, dispatch }
  ): Promise<void> => {
    const {
      user: { userName, password }
    } = getState() as RootState
    const userNameError = validateUsername(userName)
    const passwordError = validatePassword(password)
    if (userNameError || passwordError) {
      dispatch(updateFormError({ userNameError, passwordError }))
    } else {
      dispatch(updateLoader(true))
      const data = {
        userName: userName,
        password: password,
        loginDevice: payload.loginDevice
      }

      const response = await api.post(apiEndpoints.auth, data)
      const userInfo = response.data.data
      if (userInfo) {
        sessionStorage.setItem('umr-token', userInfo?.token)
        dispatch(clearError())
        history.push(ROUTES.DASHBORAD)
      } else {
        const {
          login: { invalidLogin }
        } = strings
        dispatch(updateFormError({ userNameError: invalidLogin }))
      }
    }
  }
)

export default handleAuthenticate
