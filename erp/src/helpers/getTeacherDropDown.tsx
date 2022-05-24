import { Teacher } from "redux/academic/typings"

interface DropdownListProps {
    name: string
    id: string
}

const getTeacherDropDown = (teachers: Array<Teacher>): Array<DropdownListProps> => {
    const teacherList = teachers.map((teacher: Teacher) => ({
        id: teacher?.id,
        name: teacher?.firstName
    }))
    return teacherList
}

export default getTeacherDropDown
