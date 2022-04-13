import styled from 'styled-components'

interface DropdownWrapperProps {
  width?: string
  isCenterAligned?: boolean
}

const DropdownWrapper = styled.div<DropdownWrapperProps>`
  margin: auto 12px;
  width: ${({ width }) => width || '22%'};
  @media (max-width: 415px) {
    width: 100%;
    margin: 8px;
  }
  margin-bottom: 12px;

  #editable-dropdown {
    height: 100%;
  }
  ${({ isCenterAligned }) => isCenterAligned && 'margin: auto;'}
`

export default DropdownWrapper
