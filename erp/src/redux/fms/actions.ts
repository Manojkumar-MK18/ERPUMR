import {
  addNewFeeDescription,
  getFeeDescriptions,
  getFeeMaster,
  addNewFeeMaster,
  deleteFeeMaster,
  editFeeMasterRequest,
  getStudentAdmissionList,
  editFeeDescriptionRequest,
  addFeePayment
} from './api'
import { fmsSlice } from './reducer'

const {
  updateEditDescriptionId,
  updateEditFeeMaster,
  resetError,
  updateStudentDetails,
  updateFeeDetails,
  updateTotalFeeDetails
} =
  fmsSlice.actions

export {
  addNewFeeDescription,
  getFeeDescriptions,
  updateEditDescriptionId,
  getFeeMaster,
  addNewFeeMaster,
  deleteFeeMaster,
  updateEditFeeMaster,
  editFeeMasterRequest,
  getStudentAdmissionList,
  resetError,
  updateStudentDetails,
  editFeeDescriptionRequest,
  addFeePayment,
  updateFeeDetails,
  updateTotalFeeDetails
}
