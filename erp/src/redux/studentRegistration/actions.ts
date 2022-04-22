import { studentRegistrationSlice } from './reducer'
import addNewStudent from './api'

const {
  updateChildInformation,
  updatePermanentDetails,
  updateCommunicationDetails,
  updateQualifyingExamDetails,
  resetError,
  updateSelectedStudentId
} = studentRegistrationSlice.actions

export {
  updateChildInformation,
  updatePermanentDetails,
  updateCommunicationDetails,
  updateQualifyingExamDetails,
  addNewStudent,
  resetError,
  updateSelectedStudentId
}
