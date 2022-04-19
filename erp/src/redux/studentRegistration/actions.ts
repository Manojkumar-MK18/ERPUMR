import { studentRegistrationSlice } from './reducer'
import addNewStudent from './api'

const {
  updateChildInformation,
  updatePermanentDetails,
  updateCommunicationDetails,
  updateQualifyingExamDetails,
  resetError
} = studentRegistrationSlice.actions

export {
  updateChildInformation,
  updatePermanentDetails,
  updateCommunicationDetails,
  updateQualifyingExamDetails,
  addNewStudent,
  resetError
}
