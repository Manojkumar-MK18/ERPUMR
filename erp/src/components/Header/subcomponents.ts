import styled from 'styled-components'
import { Dropdown } from 'react-bootstrap'
import { colors } from 'const/theme'
import { H3 } from 'typography'

export const ProfileDropDown = styled(Dropdown)`
  margin: auto;
  margin-right: 0;
  #profile-dropdown {
    color: ${colors.white};
    border: none;
    display: flex;
    background: none;
  }
`

export const UserName = styled(H3)`
  color: ${colors.white};
  margin: auto 12px;
  @media (max-width: 415px) {
    display: none;
  }
`

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  border: 1px solid ${({ theme }) => theme?.border};
  background: linear-gradient(to right, #f2f7f8 0%, #351038 100%);
`

export const LogoWrapper = styled.div`
  width: 120px;
  height: 35%;
  display: flex;
  margin: auto 12px;
`

export const Logo = styled.img`
  margin: 0 auto;
  height: 100%;
  width: 100%;
`
