import { ReactElement } from 'react'
import { Icon, Button } from 'components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import strings from 'locale/en'

export const ActionWrapper = (): ReactElement => {
  return (
    <div>
      <Button>{strings.studentRegistration.pay}</Button>
      <Icon variant="outline-light" onClick={() => {}}>
        <FontAwesomeIcon icon={['far', 'trash-alt']} />
      </Icon>
    </div>
  )
}
