import { ReactElement, SyntheticEvent, ChangeEvent, useEffect } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import {
  Title,
  SubTitle,
  FormContainer,
  FormWrapper,
  Icon,
  Container,
  LoginButton,
  LoginWrapper,
  LogoWrapper,
  Logo,
  Error
} from './subcomponents'
import strings from 'locale/en'
import { Loader } from 'components'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import {
  updateUserName,
  updatePassword,
  handleAuthenticate
} from 'redux/user/actions'
import { RootState } from 'redux/store'
import useBreakpoint from 'use-breakpoint'
import BREAKPOINTS from 'const/breakpoint'
import history from 'const/history'
import ROUTES from 'const/routes'
import logo from '../../assests/falcon.png'

const Login = (): ReactElement => {
  const { userName, password, userNameError, passwordError, isLoading, isLoggedIn } =
    useSelector((state: RootState) => state.user, shallowEqual)
  const {
    login: { title, description, submit }
  } = strings
  const dispatch = useDispatch()
  const { breakpoint } = useBreakpoint(BREAKPOINTS)

  useEffect(() => {
    if (isLoggedIn) {
      history.push(ROUTES.DASHBORAD)
    }
  }, [isLoggedIn])

  return (
    <LoginWrapper>
      <Container>
        <FormWrapper>
          <LogoWrapper>
            <Logo src={logo} alt="logo" />
          </LogoWrapper>
          <Title>{title}</Title>
          <SubTitle>{description}</SubTitle>
          <FormContainer
            onSubmit={(e: SyntheticEvent) => {
              e.preventDefault()
              e.stopPropagation()
              dispatch(
                handleAuthenticate({
                  loginDevice: breakpoint === 'desktop' ? 'website' : 'mobile'
                })
              )
            }}
          >
            {userNameError && <Error>{userNameError}</Error>}
            <InputGroup className="mb-3">
              <Icon icon={['far', 'user']} />
              <FormControl
                type="text"
                placeholder="Enter username"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  dispatch(updateUserName(event?.target?.value))
                }
                isValid={!!userName && !userNameError}
              />
            </InputGroup>
            {passwordError && <Error>{passwordError}</Error>}
            <InputGroup className="mb-3">
              <Icon icon={['fas', 'lock']} />
              <FormControl
                type="password"
                placeholder="Enter password"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  dispatch(updatePassword(event?.target?.value))
                }
                isValid={!!password && !passwordError}
              />
            </InputGroup>
            {isLoading ? (
              <Loader />
            ) : (
              <LoginButton variant="primary" type="submit">
                {submit}
              </LoginButton>
            )}
          </FormContainer>
        </FormWrapper>
      </Container>
    </LoginWrapper>
  )
}

export default Login
