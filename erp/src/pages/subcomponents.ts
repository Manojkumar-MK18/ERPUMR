import Button from 'components/Button'
import styled from 'styled-components'

export const SearchButton = styled(Button)`
  margin-top: 24px;

  @media (max-width: 415px) {
    margin-top: auto;
  }
`

export const DatePickerWrapper = styled.div`
  .react-datepicker-wrapper {
    height: 62px;
  }
`
