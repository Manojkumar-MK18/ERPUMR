import { ReactElement } from 'react'
import { Icon, Button } from 'components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import strings from 'locale/en'
import { ActionWrapperProps } from './typings'

export const ActionWrapper = ({
  handlePay
}: ActionWrapperProps): ReactElement => {
  return (
    <div>
      <Button onClick={handlePay}>{strings.studentRegistration.pay}</Button>
      <Icon variant="outline-light" onClick={() => {}}>
        <FontAwesomeIcon icon={['far', 'trash-alt']} />
      </Icon>
    </div>
  )
}
