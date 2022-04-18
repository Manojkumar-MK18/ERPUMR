export interface UserState {
  isLoggedIn: boolean
  isLoading: boolean
  userName: string
  password: string
  error: string
  userNameError: string
  passwordError: string
  userInfo: UserInfo | null
}

export interface UserInfo {
  role: string
  userDetail: {
    userDetailId: string
    usersId: string
    status: string
    userName: string
    branchIds: Array<string> 
    coachingCenterId: string
    firstName: string
    studentAccess: boolean
    subject: string
  }
  token: string
}

export interface ValidationError {
  userNameError?: string
  passwordError?: string
}

export interface AuthenticatePayload {
  loginDevice: 'mobile' | 'website'
}

