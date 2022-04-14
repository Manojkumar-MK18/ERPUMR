import { ReactElement } from 'react'
import { Icon } from 'components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface LeaveActionProps {
    handleEdit: () => void
    handleDelete: () => void
}

export const LeaveAction = ({
    handleDelete,
    handleEdit
}: LeaveActionProps): ReactElement => {
    return (
        <>
            <Icon variant="outline-light" onClick={handleEdit}>
                <FontAwesomeIcon icon={['far', 'edit']} />
            </Icon>
            <Icon variant="outline-light" onClick={handleDelete}>
                <FontAwesomeIcon icon={['far', 'trash-alt']} />
            </Icon>
        </>
    )
}