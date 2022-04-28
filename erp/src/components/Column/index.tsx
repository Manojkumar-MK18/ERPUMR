import { ReactElement } from 'react'
import FlexWrapper from '../FlexWrapper'
import { H4, Small } from '../../typography'
import ColumnProps from './typings'
import { colors } from '../../const/theme'

const Column = ({ keyName, value, children }: ColumnProps): ReactElement => {
  return (
    <FlexWrapper justifyContent="space-between">
      <H4>{`${keyName}: `}</H4>
      <Small hasPadding color={colors.gray}>
        {value}
        {children}
      </Small>
    </FlexWrapper>
  )
}

export default Column
