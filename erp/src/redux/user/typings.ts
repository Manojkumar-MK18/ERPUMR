export interface UserState {
  isLoggedIn: boolean
  isLoading: boolean
  userName: string
  password: string
  error: string
  userNameError: string
  passwordError: string
}

export interface ValidationError {
  userNameError?: string
  passwordError?: string
}

export interface AuthenticatePayload {
  loginDevice: 'mobile' | 'website'
}
