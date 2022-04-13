import styled from 'styled-components'

interface TitleProps {
  hasBorder?: boolean
  hasPadding?: boolean
}

const Title = styled.div<TitleProps>`
  display: flex;
  align-items: center;
  padding-bottom: ${({ hasPadding }) => (hasPadding ? '24px' : '0')};
  border-bottom: ${({ hasBorder, theme }) =>
    hasBorder ? `1px solid ${theme.border}` : '0'};
`

export default Title
