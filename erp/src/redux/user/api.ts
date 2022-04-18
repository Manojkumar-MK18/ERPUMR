import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'
import history from '../../const/history'
import ROUTES from '../../const/routes'
import { AuthenticatePayload, UserInfo } from './typings'
import api from 'services'
import apiEndpoints from 'const/apiEndpoints'
import strings from 'locale/en'
import { clearError, updateFormError } from './actions'

export const handleAuthenticate = createAsyncThunk(
  'user/authenticate',
  async (payload: AuthenticatePayload, { getState, dispatch }): Promise<UserInfo> => {
    const {
      user: { userName, password }
    } = getState() as RootState

    const data = {
      userName: userName,
      password: password,
      loginDevice: payload.loginDevice
    }

    const response = await api.post(apiEndpoints.auth, data)
    const userInfo = response.data.data
    sessionStorage.setItem('umr-token', userInfo?.token)
    if (userInfo) {

      dispatch(clearError())
      history.push(ROUTES.DASHBORAD)
    } else {
      const {
        login: { invalidLogin }
      } = strings
      dispatch(updateFormError({ userNameError: invalidLogin }))
    }
    return userInfo 
  }

)
