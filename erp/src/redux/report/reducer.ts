import { createSlice } from '@reduxjs/toolkit'
import { fetchDayBookReport, fetchdayBookReportByInstitte } from './api'
import { InitialState } from './types'

const initialState: InitialState = {
    error: '',
    isLoading: false,
    dayBookReportList: []
}

export const studentRegistrationSlice = createSlice({
    name: 'studentRegistrationSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchDayBookReport.pending.toString()]: (state) => {
            state.isLoading = true
        },
        [fetchDayBookReport.fulfilled.toString()]: (state, action) => {
            state.isLoading = false
            state.dayBookReportList = action.payload
        },
        [fetchDayBookReport.rejected.toString()]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        [fetchdayBookReportByInstitte.fulfilled.toString()]: (state, action) => {
            state.isLoading = false
            state.dayBookReportList = action.payload
        }
    }
})

export default studentRegistrationSlice.reducer
