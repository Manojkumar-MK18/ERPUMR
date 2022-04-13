import { studentRegistrationSlice } from './reducer'
import {
  AddChildApi,
  AddCommunicationApi,
  AddPermenentApi,
  AddQualifyApi,
  AddCourseApi
} from './api'

const {
  updateChildInformation,
  updatePermanentDetails,
  updateCommunicationDetails,
  updateQualifyingExamDetails,
  updateCourseInformation
} = studentRegistrationSlice.actions

export {
  updateChildInformation,
  updateCourseInformation,
  updatePermanentDetails,
  updateCommunicationDetails,
  updateQualifyingExamDetails,
  AddChildApi,
  AddCommunicationApi,
  AddPermenentApi,
  AddQualifyApi,
  AddCourseApi
}
