import styled from 'styled-components'
import Flex from 'components/FlexWrapper'
import { FlexWrapperProps } from './typings'

export const InfoWrapper = styled.div`
  display: flex;
  @media (max-width: 415px) {
    flex-direction: column;
  }
`

export const FlexWrapper = styled(Flex)<FlexWrapperProps>`
  @media (max-width: 415px) {
    width: 100%;
  }
  margin-top: 4px;
  align-content: flex-start;
`

export const DatePickerWrapper = styled.div`
  .react-datepicker-wrapper {
    height: 62px;
  }
`
