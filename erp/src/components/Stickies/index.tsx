import { ReactElement } from 'react'
import { StickiesProps } from './typings'
import { StickiesWrapper, TextWrapper, IconWrapper } from './subcomponents'
import { H2 } from 'typography'
import { colors } from 'const/theme'
import { FlexWrapper } from 'components'

const Stickies = ({
  width,
  height,
  variant,
  icon,
  title,
  notes
}: StickiesProps): ReactElement => {
  return (
    <StickiesWrapper
      width={width}
      height={height}
      variant={variant}
      justifycontent="flex-start"
      $hasShadow
    >
      <FlexWrapper noPadding>
        <IconWrapper icon={icon} size="lg" />
        <H2 color={colors.white} hasPadding>
          {title}
        </H2>
      </FlexWrapper>
      <TextWrapper>{notes}</TextWrapper>
    </StickiesWrapper>
  )
}

export default Stickies
