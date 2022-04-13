import { colors } from 'const/theme'
import styled from 'styled-components'
import { FlexWrapper } from 'components'

export const AddFeeWrapper = styled.div`
  width: 100%;
  padding: 16px;
  background: ${colors.white};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const FeeWrapper = styled(FlexWrapper)`
  margin: 0 auto;
  @media (max-width: 415px) {
    width: 100%;
  }
`
