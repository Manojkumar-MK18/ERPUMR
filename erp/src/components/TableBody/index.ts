import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { colors } from 'const/theme'

export const TableRow = styled.tr`
 vertical-align: baseline;  
`

export const Icon = styled(Button)`
  border-color: ${colors.white};
  color: ${colors.gray};
  text-transform: capitalize;
  background: none;
  border: none;
  &:hover,
  &:focus {
    border-color: ${colors.black};
    background: none;
    color: ${colors.purple};
  }
  max-width: 40px;
`
