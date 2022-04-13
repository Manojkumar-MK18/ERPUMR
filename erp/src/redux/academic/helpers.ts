import { Course, DropdownList } from './typings'

const getCoursesDropdown = (courses: Array<Course>): DropdownList => {
  const coursesList = courses.map((course: Course) => ({
    id: course?.id,
    name: course?.courseName
  }))
  return coursesList
}

export default getCoursesDropdown
