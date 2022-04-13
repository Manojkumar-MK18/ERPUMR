import { colors } from 'const/theme'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'
import { CardWrapperProps } from './typings'

const CardWrapper = styled(Card)<CardWrapperProps>`
  box-shadow: 0 1px 10px 0
    ${({ theme, variant }) =>
      variant ? theme.card.variantType[variant]['primary'] : theme.card.border};
  ${({ width }) => width && `width:${width};`}
  ${({ height }) => height && `height:${height};`}
  #icon-wrapper {
    margin-top: -40px;
    align-items: center;
    justify-content: center;
    color: ${colors.white};
  }
  ${({ variant, theme }) =>
    variant &&
    `
  background: linear-gradient(60deg, ${theme.card.variantType[variant]['primary']}, ${theme.card.variantType[variant]['secondary']});
  `}
  @media (max-width: 415px) {
    margin-bottom: 16px;
  }
`

export default CardWrapper
