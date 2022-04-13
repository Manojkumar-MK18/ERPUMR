import styled from 'styled-components'
import { H3 } from '../../typography'

const CardHeader = styled(H3)`
  background-color: ${({ theme }) => theme.card.background};
  color: ${({ theme }) => theme.card.color};
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.card.border};
  margin-bottom: 0;
`

export default CardHeader
