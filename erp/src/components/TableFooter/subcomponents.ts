import styled from 'styled-components'
import { colors } from '../../const/theme'
import { Button } from 'react-bootstrap'
import { NavigationButtonProps } from './typings'
import { Body } from '../../typography'

export const TableFooterWrapper = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  border: 1px solid ${colors.lightGrey};
  justify-content: center;
`

export const NavigationButton = styled(Button)<NavigationButtonProps>`
  border-color: ${colors.white};
  color: ${colors.gray};
  text-transform: capitalize;
  background: none;
  border: none;
  &:hover,
  &:focus {
    border-color: none;
    background: none;
    border: none;
    text-decoration: underline;
    color: ${colors.black};
  }
  min-width: 100px;
  max-width: 150px;
  div {
    display: flex;
    justify-content: ${({ $isLeft }) => ($isLeft ? 'end' : 'start')};
  }
  svg {
    margin: auto 10px;
  }
`

export const PageDisplay = styled(Body)`
  width: 20%;
  text-align: center;
  @media (max-width: 415px) {
    width: 40%;
  }
`
