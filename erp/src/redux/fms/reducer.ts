import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  AddFeeDescriptionResponse,
  AddFeeDescriptionState,
  Student,
  StudentList
} from './typings'
import {
  addNewFeeDescription,
  getFeeDescriptions,
  getFeeMaster,
  deleteFeeMaster,
  getStudentAdmissionList,
} from './api'
import strings from 'locale/en'

const initialState: AddFeeDescriptionState = {
  feeDescriptionList: [],
  isLoading: false,
  editDescriptionId: 0,
  feeMasterList: [],
  editFeeMaster: null,
  studentApplicationList: null,
  error: '',
  selectedStudentDetails: null,
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
  }
})

export default fmsSlice.reducer
