import { ReactElement } from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 6px;
  background: ${({ theme: { footer } }) => footer.background};
  border: 1px solid ${({ theme }) => theme?.border};
  #footer-text {
    color: ${({ theme: { footer } }) => footer.text};
  }
`

const Footer = (): ReactElement => {
  return (
    <FooterWrapper>
      <span id="footer-text">
        <a href="/">Upmyranks</a> © 2021.
      </span>
    </FooterWrapper>
  )
}

export default Footer
