import { colors } from 'const/theme'
import styled from 'styled-components'
import { NotesWrapperProps } from './typings'
import Card from 'react-bootstrap/Card'

export const NotesWrapper = styled(Card)<NotesWrapperProps>`
  ${({ $hasShadow, theme, variant }) =>
    $hasShadow &&
    `box-shadow: 0 1px 10px 0 ${theme.notes.variantType[variant]['primary']}`};
  color: ${colors.white};
  border: ${({ $hasShadow, theme }) =>
    $hasShadow ? `1 px solid ${theme.card.border}` : 'none'};
  align-items: center;
  justify-content: ${({ justifycontent }) =>
    justifycontent ? justifycontent : 'center'};
  display: flex;
  flex-direction: row;
  ${({ width }) => width && `width:${width};`}
  ${({ height }) => height && `height:${height};`}
  ${({ variant, theme, $hasShadow }) =>
    variant &&
    `
  background: ${
    theme.notes.variantType[variant][$hasShadow ? 'primary' : 'secondary']
  };
`}

${({$hasShadow}) => $hasShadow && `
@media (max-width: 415px) {
  margin-bottom: 12px;
}
`}
`

export const TextWrapper = styled.div`
  text-align: start;
  padding: 0 8px;
`
