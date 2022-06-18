import { academicSlice } from './reducer'
import getCourses, {
  getInstitutes,
  getBranchesByInstitute,
  getAllCoursesByInstitute,
  getBatchesForCourse,
  getChildCourses,
  getBatches
} from './api'

const { updateSemester, updateAcademicYear, updateYear } = academicSlice.actions

export {
  updateSemester,
  updateAcademicYear,
  updateYear,
  getCourses,
  getInstitutes,
  getBranchesByInstitute,
  getAllCoursesByInstitute,
  getBatchesForCourse,
  getChildCourses,
  getBatches
}
