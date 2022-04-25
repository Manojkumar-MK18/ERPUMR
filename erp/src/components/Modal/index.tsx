import { ReactElement } from 'react'
import { Modal as BootstrapModal, Button } from 'react-bootstrap'
import { colors } from '../../const/theme'
import { Body, H3 } from '../../typography'
import strings from '../../locale/en'
import ModalProps from './typings'
import PrimaryButton from '../../components/Button'

const Modal = ({
  title,
  description,
  isLargeModal,
  handleCancel,
  handleSubmit,
  children,
  submitButtonText,
  cancelButtonText,
  isDisabled
}: ModalProps): ReactElement => {
  return (
    <BootstrapModal
      show={true}
      size={isLargeModal ? 'lg' : 'sm'}
      onHide={handleCancel}
      backdrop="static"
      centered
      keyboard={false}
    >
      <BootstrapModal.Header closeButton>
        {title && <H3 color={colors.purple}>{title}</H3>}
      </BootstrapModal.Header>
      {description && (
        <BootstrapModal.Body>
          <Body>{description}</Body>
        </BootstrapModal.Body>
      )}
      {children && children}
      <BootstrapModal.Footer>
        <Button variant="outline-secondary" onClick={handleCancel}>
          {cancelButtonText || strings.modal.cancel}
        </Button>
        <PrimaryButton
          variant="outline-danger"
          onClick={handleSubmit}
          disabled={isDisabled}
        >
          {submitButtonText || strings.modal.submit}
        </PrimaryButton>
      </BootstrapModal.Footer>
    </BootstrapModal>
  )
}

export default Modal
