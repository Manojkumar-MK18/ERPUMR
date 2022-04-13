import { ReactElement } from 'react'
import { CardWrapper, CardHeader } from 'components'
import strings from 'locale/en'

const Documents = (): ReactElement => {
  const {
    studentRegistration: { studentDocument }
  } = strings
  return (
    <div>
      <CardWrapper>
        <CardHeader>{studentDocument}</CardHeader>
        <div />
      </CardWrapper>
    </div>
  )
}

export default Documents
