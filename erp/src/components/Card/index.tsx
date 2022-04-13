import { ReactElement } from 'react'
import { FlexWrapper, CardWrapper } from 'components'
import { CardProps } from './typings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Body, Span, Small } from 'typography'
import { TextWrapper, CardFooter } from './subcomponents'
import { colors } from 'const/theme'

const Card = ({
  width,
  height,
  title,
  subTitle,
  variant,
  icon
}: CardProps): ReactElement => {
  return (
    <CardWrapper width={width} height={height}>
      <FlexWrapper justifyContent="space-around">
        <CardWrapper
          width="80px"
          height="80px"
          id="icon-wrapper"
          variant={variant}
        >
          <FontAwesomeIcon icon={icon} size="2x" />
        </CardWrapper>
        <TextWrapper>
          <Body>{title}</Body>
          <Span isBold>{subTitle}</Span>
        </TextWrapper>
      </FlexWrapper>
      <CardFooter hasTopBorder>
        <FontAwesomeIcon icon={icon} size="1x" color={colors.gray} />
        <Small hasPadding isHelpText>
          {title}
        </Small>
      </CardFooter>
    </CardWrapper>
  )
}

export default Card
