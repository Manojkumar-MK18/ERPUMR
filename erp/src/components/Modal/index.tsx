import { ReactElement } from 'react'
import { Modal as BootstrapModal, Button } from 'react-bootstrap'
import { colors } from '../../const/theme'
import { Body, H3 } from '../../typography'
import strings from '../../locale/en'
import ModalProps from './typings'

const Modal = ({
  title,
  description,
  handleCancel,
  handleSubmit
}: ModalProps): ReactElement => {
  return (
    <BootstrapModal
      show={true}
      onHide={handleCancel}
      backdrop="static"
      keyboard={false}
    >
      <BootstrapModal.Header closeButton>
        {title && <H3 color={colors.red}>{title}</H3>}
      </BootstrapModal.Header>
      {description && (
        <BootstrapModal.Body>
          <Body>{description}</Body>
        </BootstrapModal.Body>
      )}
      <BootstrapModal.Footer>
        <Button variant="outline-secondary" onClick={handleCancel}>
          {strings.modal.cancel}
        </Button>
        <Button variant="outline-danger" onClick={handleSubmit}>
          {strings.modal.submit}
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  )
}

export default Modal
