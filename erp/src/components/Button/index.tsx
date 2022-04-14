import { colors } from 'const/theme'
import Button from 'react-bootstrap/esm/Button'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  background: ${colors.purple};
  border: none;
  &:focus,
  &:hover,
  &:active {
    background: ${({ theme }) => theme.button.primarySelect} !important;
    border: none;
  }
  margin: auto 4px;
  min-width: 75px;
  min-height: 38px;
  &:disabled {
    background: ${({ theme }) => theme.button.primarySelect};
  }
`

export default StyledButton
