import styled from 'styled-components'

interface FlexWrapperProps {
  noPadding?: boolean
  justifyContent?: string
  height?: number
  hasBorder?: boolean
  hasTopBorder?: boolean
  width?: string
}

const FlexWrapper = styled.div<FlexWrapperProps>`
  padding: ${({ noPadding }) => (noPadding ? '0' : '12px 0')};
  display: flex;
  flex-wrap: wrap;
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  ${({ width }) => width && `width:${width};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  margin: ${({ noPadding }) => (noPadding ? '0' : '12px 0')};
  ${({ hasBorder, theme }) =>
    hasBorder && `border-bottom: 1px solid ${theme.border}`}
  ${({ hasTopBorder, theme }) =>
    hasTopBorder && `border-top: 1px solid ${theme.border}`}
`

export default FlexWrapper
