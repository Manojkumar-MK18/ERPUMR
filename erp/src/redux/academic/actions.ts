import { academicSlice } from './reducer'
import getCourses from './api'

const { updateSemester, updateAcademicYear, updateYear } = academicSlice.actions

export { updateSemester, updateAcademicYear, updateYear, getCourses }
