import styled from 'styled-components'
import fonts, { weight } from '../const/fonts'
import { colors } from '../const/theme'

interface TypographyProps {
  color?: string
  isHelpText?: boolean
  hasPadding?: boolean
  isBold?: boolean
}

export const H1 = styled.h1<TypographyProps>`
  font-size: ${fonts.xLarge}px;
  font-weight: ${weight.bold};
  color: ${({ color }) => (color ? color : colors.black)};
`

export const H2 = styled.h2<TypographyProps>`
  color: ${({ color }) => (color ? color : colors.white)};
  font-size: ${fonts.large}px;
  margin: auto 0;
  padding: ${({ hasPadding }) => (hasPadding ? '0 8px' : '0')};
`

export const H3 = styled.h3<TypographyProps>`
  color: ${({ color }) => (color ? color : colors.heavyGray)};
  font-size: ${fonts.small}px;
  * > img {
    height: auto !important;
  }
`

export const H4 = styled.h4<TypographyProps>`
  color: ${({ color }) => (color ? color : colors.heavyGray)};
  font-size: ${fonts.small}px;
`

export const Small = styled.small<TypographyProps>`
  font-size: ${fonts.tiny}px;
  opacity: ${({ isHelpText }) => (isHelpText ? '0.5' : '1')};
  padding: 2px ${({ hasPadding }) => (hasPadding ? '8px' : '0')};
  font-weight: ${weight.normal};
  color: ${({ color }) => (color ? color : colors.black)};
`

export const Large = styled.small<TypographyProps>`
  font-size: ${fonts.large}px;
  padding: 0 8px;
  font-weight: ${weight.normal};
  color: ${({ color }) => (color ? color : colors.gray)};
`

export const Body = styled.p<TypographyProps>`
  font-size: ${fonts.small}px;
  font-weight: ${weight.normal};
  color: ${({ color }) => (color ? color : colors.gray)};
  margin: auto 0;
  padding: ${({ hasPadding }) => (hasPadding ? '0 8px' : '0')};
`

export const Span = styled.span<TypographyProps>`
  color: ${({ color }) => (color ? color : colors.gray)};
  font-weight: ${({isBold}) => isBold ? weight.bold : weight.normal};
  font-size: ${({isBold}) => isBold ? fonts.large : fonts.small}px;

`

export const Label = styled.label<TypographyProps>`
  color: ${({ color }) => (color ? color : colors.gray)};
  font-size: ${fonts.small}px;
  font-weight: ${weight.normal};
`
