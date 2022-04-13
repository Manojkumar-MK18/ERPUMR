import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddFeeDescriptionResponse, AddFeeDescriptionState } from './typings'
import {
  addNewFeeDescription,
  getFeeDescriptions,
  getFeeMaster,
  deleteFeeMaster
} from './api'

const initialState: AddFeeDescriptionState = {
  feeDescriptionList: [],
  isLoading: false,
  editDescriptionId: 0,
  feeMasterList: [],
  editFeeMaster: null
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
    }
  },
  extraReducers: {
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
    }
  }
})

export default fmsSlice.reducer
