import styled from 'styled-components'
import { InputGroup, FormControl } from 'react-bootstrap'
import { colors } from '../../const/theme'
import { EditDropdownWrapperProps } from './typings'
import { H3 } from '../../typography'

export const ListInput = styled(InputGroup)`
  height: 43%;
  #dropdown-id {
    border: 1px solid ${({ theme }) => theme.border};
    &:hover,
    &:focus {
      background: ${({ theme: { dropDown } }) => dropDown.background};
      color: ${({ theme: { dropDown } }) => dropDown.color};
    }
  }
  .dropdown-menu.show {
    max-height: 300px;
    overflow: auto;
  }
`

export const Title = styled(H3)`
  margin-bottom: 5px;
`

export const DropdownInput = styled(FormControl)`
  background: ${colors.white} !important;
  &.form-control.is-valid {
    border-color: ${({ theme: { dropDown } }) => dropDown.success};
  }

  &.form-control.is-invalid {
    border-color: ${({ theme: { dropDown } }) => dropDown.error};
  }

  &.is-valid + #dropdown-id {
    border-color: ${({ theme: { dropDown } }) => dropDown.success};
  }

  &.is-invalid + #dropdown-id {
    border-color: ${({ theme: { dropDown } }) => dropDown.error};
  }
`

export const EditDropdownWrapper = styled.div<EditDropdownWrapperProps>`
  width: ${({ width }) => width || '100%'};
  @media (max-width: 415px) {
    width: 100%;
  }

  ${({ isDisabled }) =>
    isDisabled &&
    `
pointer-events: none;
opacity: 0.7;
`}
`
