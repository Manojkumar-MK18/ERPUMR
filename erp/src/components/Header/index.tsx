import { ReactElement } from 'react'
import { Dropdown } from 'react-bootstrap'
import {
  ProfileDropDown,
  UserName,
  HeaderWrapper,
  LogoWrapper,
  Logo
} from './subcomponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors } from 'const/theme'
import strings from 'locale/en'
import history from 'const/history'
import ROUTES from 'const/routes'
import { updateIsLoggedIn } from 'redux/user/actions'
import { useDispatch } from 'react-redux'
import { Icon } from '../TableBody'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import BREAKPOINTS from 'const/breakpoint'
import useBreakpoint from 'use-breakpoint'
import { updateIsMenuOpen } from 'redux/menu/actions'
import logo from '../../assests/falcon.png'

const Header = (): ReactElement => {
  const {
    isMenuOpen,
    userName = ""
  } =
    useSelector(
      (state: RootState) => ({
        isMenuOpen: state.menu,
        userName: state.user.userInfo?.userDetail.userName
      })
    )
  const { breakpoint } = useBreakpoint(BREAKPOINTS)
  const showMenu = breakpoint === 'mobile' && !isMenuOpen
  const {
    dropdown: { logout }
  } = strings
  const dispatch = useDispatch()

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo src={logo} alt="logo" />
      </LogoWrapper>
      {showMenu && (
        <Icon
          variant="outline-light"
          onClick={() => {
            dispatch(updateIsMenuOpen(true))
          }}
        >
          <FontAwesomeIcon icon={['fas', 'bars']} size="2x" />
        </Icon>
      )}
      <ProfileDropDown>
        <Dropdown.Toggle variant="light" id="profile-dropdown">
          <UserName>{userName}</UserName>
          <FontAwesomeIcon
            icon={['fas', 'user-circle']}
            size="2x"
            color={colors.white}
          />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              dispatch(updateIsLoggedIn(false))
              history.push(ROUTES.LOGIN)
            }}
          >
            {logout}
          </Dropdown.Item>
        </Dropdown.Menu>
      </ProfileDropDown>
    </HeaderWrapper>
  )
}

export default Header
