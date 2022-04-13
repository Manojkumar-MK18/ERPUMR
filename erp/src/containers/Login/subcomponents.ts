import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fonts, { weight } from '../../const/fonts'
import { H1, H3, Small } from '../../typography'
import { colors } from 'const/theme'

export const LoginWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  border-radius: 4px;
  background: ${({ theme }) => theme?.appBackground};
`

export const FormWrapper = styled.div`
  background: ${({ theme }) => theme?.login?.background};
  padding: 1rem 0.5rem;
`

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  height: 300px;
  margin: auto;
  @media (min-width: 769px) {
    width: 40%;
  }
`

export const RegisterText = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 0.5rem;
`

export const SignupLink = styled(Link)`
  padding-left: 5px;
  text-decoration: none;
  font-weight: ${weight.bold};
  &,
  &:hover {
    color: ${({ theme }) => theme?.button?.primary};
  }
`

export const Title = styled(H1)`
  text-align: center;
  margin-top: 24px;
`

export const SubTitle = styled(H3)`
  text-align: center;
`

export const LoginButton = styled(Button)`
  display: block;
  margin: auto;
  background: ${({ theme }) => theme?.button?.primary};
  border: none;
  width: 100px;
`

export const FormContainer = styled(Form)`
  max-width: 75%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: ${fonts.medium}px;
  color: ${({ theme }) => theme?.icon?.normal};
  margin: auto 8px;
`

export const HeaderWrapper = styled.div`
  width: 100%;
  padding: 6px;
  background: white;
  border: 1px solid;
  #header-text {
    color: black;
  }
`

export const LogoWrapper = styled.div`
  width: 120px;
  height: 50%;
  display: flex;
  margin: 16px auto;
`

export const Logo = styled.img`
  margin: 0 auto;
  height: 100%;
  width: 100%;
`

export const Error = styled(Small)`
  color: ${colors.red};
  margin: 0 28px;
`
