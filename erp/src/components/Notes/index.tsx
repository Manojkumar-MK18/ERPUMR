import { ReactElement } from 'react'
import { NotesProps } from './typings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NotesWrapper, TextWrapper } from './subcomponents'
import { H2, Span } from 'typography'
import { colors } from 'const/theme'

const Notes = ({
  width,
  height,
  variant,
  icon,
  title,
  subTitle
}: NotesProps): ReactElement => {
  return (
    <NotesWrapper
      width={width}
      height={height}
      variant={variant}
      justifycontent="flex-start"
      $hasShadow
    >
      <NotesWrapper width="80px" height={height} variant={variant}>
        <FontAwesomeIcon icon={icon} size="2x" />
      </NotesWrapper>
      <TextWrapper>
        <H2 color={colors.white}>{title}</H2>
        <Span color={colors.white}>{subTitle}</Span>
      </TextWrapper>
    </NotesWrapper>
  )
}

export default Notes
