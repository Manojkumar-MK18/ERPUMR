import { ReactElement } from 'react'
import { Icon, Button } from 'components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import strings from 'locale/en'
import { useHistory } from 'react-router-dom'
import ROUTES from 'const/routes'

export const ActionWrapper = (): ReactElement => {
  const history = useHistory()
  return (
    <div>
      <Button
        onClick={() => {
          {
            history.push(ROUTES.STUDENT_PAY);
          }
        }}
      >{strings.studentRegistration.pay}</Button>
      <Icon variant="outline-light" onClick={() => { }}>
        <FontAwesomeIcon icon={['far', 'trash-alt']} />
      </Icon>
    </div>
  )
}
