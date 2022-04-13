import styled from 'styled-components'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  @media (max-width: 415px) {
    width: 98%;
  }
  background: ${({ theme }) => theme.appBackground};
`

export default PageWrapper
