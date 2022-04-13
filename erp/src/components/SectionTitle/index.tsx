import { ReactElement } from 'react'
import { colors } from '../../const/theme'
import { H2, Small } from '../../typography'
import Title from './subcomponents'
import BackButton from '../BackButton'
import { useHistory } from 'react-router-dom'

interface SectionTitleProps {
  title: string
  helpText?: string
  hasBorder?: boolean
  hasBackButton?: boolean
  hasPadding?: boolean
}

const SectionTitle = ({
  helpText,
  title,
  hasBorder,
  hasBackButton,
  hasPadding = true
}: SectionTitleProps): ReactElement => {
  const history = useHistory()
  return (
    <Title hasBorder={hasBorder} hasPadding={hasPadding}>
      {hasBackButton && (
        <BackButton
          handleBack={() => {
            history.goBack()
          }}
        />
      )}
      <H2 color={colors.purple}>{title}</H2>
      {helpText && (
        <div>
          <Small isHelpText={true}>{helpText}</Small>
        </div>
      )}
    </Title>
  )
}

export default SectionTitle
