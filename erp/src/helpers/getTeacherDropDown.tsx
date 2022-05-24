import { Admin } from 'redux/lesson/typing'
import { DropdownListProps } from '../components/EditableDropdown/typings'

const getUserDropdown = (users: Array<Admin>): Array<DropdownListProps> => {
    const userList = users.map(({ id, firstName, lastName }: Admin) => ({
        id: id,
        name: `${firstName} ${lastName}`
    }))
    return userList
}

export default getUserDropdown
