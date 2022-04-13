import {
  addNewFeeDescription,
  getFeeDescriptions,
  getFeeMaster,
  addNewFeeMaster,
  deleteFeeMaster,
  editFeeMasterRequest
} from './api'
import { fmsSlice } from './reducer'

const { updateEditDescriptionId, updateEditFeeMaster } = fmsSlice.actions

export {
  addNewFeeDescription,
  getFeeDescriptions,
  updateEditDescriptionId,
  getFeeMaster,
  addNewFeeMaster,
  deleteFeeMaster,
  updateEditFeeMaster,
  editFeeMasterRequest
}
