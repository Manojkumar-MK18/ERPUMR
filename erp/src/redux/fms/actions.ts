import {
  addNewFeeDescription,
  getFeeDescriptions,
  getFeeMaster,
  addNewFeeMaster,
  deleteFeeMaster,
  editFeeMasterRequest,
  getStudentAdmissionList
} from './api'
import { fmsSlice } from './reducer'

const { updateEditDescriptionId, updateEditFeeMaster, resetError } =
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
  resetError
}
