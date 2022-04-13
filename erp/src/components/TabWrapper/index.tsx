import styled from 'styled-components'
import { colors } from 'const/theme'

const TabWrapper = styled.div`
  .nav-tabs {
    border-bottom: 1px solid ${({ theme }) => theme.tab.border};
  }

  .nav-item {
    button {
      color: ${colors.gray};
    }
  }
  .nav-link.active {
    color: ${colors.purple};
    border-left: 1px solid ${({ theme }) => theme.tab.border};
    border-top: 1px solid ${({ theme }) => theme.tab.border};
    border-right: 1px solid ${({ theme }) => theme.tab.border};
  }
`

export default TabWrapper
