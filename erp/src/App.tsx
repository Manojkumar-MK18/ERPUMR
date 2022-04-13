import { ReactElement, useEffect } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme, { colors } from './const/theme'
import Footer from './components/Footer'
import Header from './components/Header'
import { Router } from 'react-router-dom'
import styled from 'styled-components'
import useBreakpoint from 'use-breakpoint'
import BREAKPOINTS from 'const/breakpoint'
import history from 'const/history'
import Routes from 'routes'
import SideNavigation from 'containers/SideNavigation'
import menus from 'const/menus'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import { updateIsMenuOpen } from 'redux/menu/actions'
import 'react-datepicker/dist/react-datepicker.css'

interface BodyProps {
  isShowOverlay: boolean
}

const Body = styled.div<BodyProps>`
  display: flex;
  min-height: calc(100vh - 40px);
  background: ${({ isShowOverlay }) =>
    isShowOverlay
      ? `
  linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  )
  `
      : 'none'};
`

interface GlobalStylesProps {
  isMobileMenuOpen?: boolean
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  body {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    font-family: "Open Sans", sans-serif;
    overflow: ${({ isMobileMenuOpen }) =>
      isMobileMenuOpen ? 'hidden' : 'auto'};
  }
  #container {
    z-index: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? '-1' : '0')};
  }

  .react-datepicker-popper {
    z-index: 999;
    padding: 0 !important;
  }
  td {
    border: 1px solid ${colors.lightGrey};
    text-align: center;
  }
  th {
    border: 1px solid ${colors.white};
    text-align: center;
  }

  &.form-control.is-valid {
    border-color: ${colors.purple};
  }

  &.form-control.is-invalid {
    border-color: ${colors.red};
  }
`

const App = (): ReactElement => {
  const { isLoggedIn, isMenuOpen } = useSelector(
    (state: RootState) => ({
      isLoggedIn: state.user.isLoggedIn,
      isMenuOpen: state.menu.isMenuOpen
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const { breakpoint } = useBreakpoint(BREAKPOINTS)
  const isMobileMenuOpen = isMenuOpen && breakpoint === 'mobile'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [breakpoint])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles isMobileMenuOpen={isMobileMenuOpen} />
        {isLoggedIn && <Header />}
        <Router history={history}>
          <Body
            isShowOverlay={isMobileMenuOpen}
            onClick={() => {
              setTimeout(() => {
                if (isLoggedIn && isMobileMenuOpen) {
                  dispatch(updateIsMenuOpen(false))
                }
              }, 500)
            }}
          >
            {isLoggedIn && <SideNavigation menus={menus.admin} />}
            <Routes />
          </Body>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
