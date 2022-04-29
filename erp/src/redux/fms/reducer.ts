import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  AddFeeDescriptionResponse,
  AddFeeDescriptionState,
  FeeDetails,
  Payment,
  Student,
  StudentList
} from './typings'
import {
  addNewFeeDescription,
  getFeeDescriptions,
  getFeeMaster,
  deleteFeeMaster,
  getStudentAdmissionList,
  addFeePayment
} from './api'
import strings from 'locale/en'
import getFeeDescriptionDropdown from 'pages/FeesManagementSystem/AddFeeMaster/helpers'

const initialState: AddFeeDescriptionState = {
  feeDescriptionList: [],
  isLoading: false,
  editDescriptionId: 0,
  feeMasterList: [],
  editFeeMaster: null,
  studentApplicationList: null,
  error: '',
  selectedStudentDetails: null,
  feeDescriptionListDropdown: [],
  updateStudent: [],
  selectedFeeDetails: null,
  selectedFeetotalDetails: null,
  selectedPaymentMode: null
}

export const fmsSlice = createSlice({
  name: 'fms',
  initialState,
  reducers: {
    updateEditDescriptionId: (state, action: PayloadAction<number>) => {
      state.editDescriptionId = action.payload
    },
    updateEditFeeMaster: (
      state,
      action: PayloadAction<AddFeeDescriptionResponse | null>
    ) => {
      state.editFeeMaster = action.payload
    },
    resetError: (state) => {
      state.error = ''
    },
    updateStudentDetails: (state, action: PayloadAction<Student | null>) => {
      state.selectedStudentDetails = action.payload
    },
    updateFeeDetails: (state, action: PayloadAction<FeeDetails | null>) => {
      state.selectedFeeDetails = action.payload
    },
    updateTotalFeeDetails: (state, action: PayloadAction<FeeDetails | null>) => {
      state.selectedFeetotalDetails = action.payload
    },
    updatePaymentMode: (state, action: PayloadAction<Payment | null>) => {
      state.selectedPaymentMode = action.payload
    },
  },
  extraReducers: {
    [getStudentAdmissionList.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getStudentAdmissionList.fulfilled.toString()]: (
      state,
      action: PayloadAction<StudentList>
    ) => {
      state.isLoading = false
      state.studentApplicationList = action?.payload
    },
    [getStudentAdmissionList.rejected.toString()]: (state) => {
      state.isLoading = false
      state.error = strings?.studentRegistration.getStudentsError
    },
    [deleteFeeMaster.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [deleteFeeMaster.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [addNewFeeDescription.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [addNewFeeDescription.fulfilled.toString()]: (state) => {
      state.isLoading = false
    },
    [addNewFeeDescription.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [getFeeDescriptions.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getFeeDescriptions.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<AddFeeDescriptionResponse>>
    ) => {
      state.isLoading = false
      state.feeDescriptionList = action.payload
      state.feeDescriptionListDropdown = getFeeDescriptionDropdown(action.payload)
    },
    [getFeeDescriptions.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [getFeeMaster.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [getFeeMaster.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<AddFeeDescriptionResponse>>
    ) => {
      state.isLoading = false
      state.feeMasterList = action.payload
    },
    [getFeeMaster.rejected.toString()]: (state) => {
      state.isLoading = false
    },
    [addFeePayment.rejected.toString()]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export default fmsSlice.reducer
