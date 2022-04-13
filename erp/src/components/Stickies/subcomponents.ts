import styled from "styled-components"
import Card from 'react-bootstrap/Card'
import {StickiesWrapperProps} from './typings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors } from "const/theme"

export const StickiesWrapper = styled(Card)<StickiesWrapperProps>`
  box-shadow: 0 1px 10px 0
    ${({ theme, variant }) =>
      variant ? theme.card.variantType[variant]['primary'] : theme.card.border};
  ${({ width }) => width && `width:${width};`}
  ${({ height }) => height && `height:${height};`}
  ${({ variant, theme }) =>
    variant &&
    `
  background: linear-gradient(60deg, ${theme.card.variantType[variant]['primary']}, ${theme.card.variantType[variant]['secondary']});
  `}
  @media (max-width: 415px) {
    margin-bottom: 16px;
  }
  color: ${colors.white};
`

export const TextWrapper = styled.div`
  text-align: start;
  padding: 0 8px;
`

export const IconWrapper = styled(FontAwesomeIcon)`
  margin: 4px;
`