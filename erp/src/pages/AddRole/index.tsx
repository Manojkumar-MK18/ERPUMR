import { ReactElement } from 'react'
import strings from 'locale/en'
import {
  FlexWrapper,
  PageWrapper,
  SectionTitle,
  Input,
  Button
} from 'components'

const AddRole = (): ReactElement => {
  const {
    role: { addRole, addRolePlaceholder, addRoleLabel },
    button: { save }
  } = strings

  return (
    <PageWrapper id="container">
      <SectionTitle title={addRole} hasBorder />
      <FlexWrapper>
        <Input
          label={addRoleLabel}
          placeholder={addRolePlaceholder}
          value={''}
          onBlur={() => {}}
          error={''}
          width="30%"
          onChange={(value: string) => {
            console.log(value)
          }}
          height="72px"
        />
        <Button>{save}</Button>
      </FlexWrapper>
    </PageWrapper>
  )
}

export default AddRole
