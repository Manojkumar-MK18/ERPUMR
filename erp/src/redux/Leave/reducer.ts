import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddLeave, AddLeavebyUserId, ApplyLeave, LeaveState, UpdateFormValue, } from './typing'
import { encassableList, leaveType } from './const'
import { AddLeaveapi,applyLeaveApi } from './api'

const initialState: LeaveState = {
    encassable: encassableList,
    leaveType: leaveType,
    addLeaveDetails: {
        leaveDescription: '',
        leaveName: '',
        encashable: '',
        adminType: '',
        userId: ''
    },
    isLoading: false,
    selectedUser: {
        adminType: '',
        userId: ''
    },
    applyLeaveDetails: {
        leaveName: '',
        leaveType: '',
        fromDate: '',
        toDate: '',
        remarks: '',
        dayStatus: ''
    },
    selectFormValues: {
        fromDate: '',
        toDate: ''
    }
}

export const leaveSlice = createSlice({
    name: 'leave',
    initialState,
    reducers: {
        updateSelectedUser: (state, action: PayloadAction<AddLeavebyUserId>) => {
            state.selectedUser = action?.payload
        },
        updteFormValues: (state, action: PayloadAction<UpdateFormValue>) => {
            state.selectFormValues[action.payload.key] = action?.payload?.value 
          },
    },
    extraReducers: {
        [AddLeaveapi.pending.toString()]: (state) => {
            state.isLoading = true;
        },
        [AddLeaveapi.fulfilled.toString()]: (state, action: PayloadAction<AddLeave>) => {
            state.isLoading = false
            state.addLeaveDetails = action?.payload
        },
        [AddLeaveapi.rejected.toString()]: (state) => {
            state.isLoading = false;
        },
        [applyLeaveApi.pending.toString()]: (state) => {
            state.isLoading = true;
        },
        [applyLeaveApi.fulfilled.toString()]: (state, action: PayloadAction<ApplyLeave>) => {
            state.isLoading = false
            state.applyLeaveDetails = action?.payload
        },
        [applyLeaveApi.rejected.toString()]: (state) => {
            state.isLoading = false;
        },
    }
})

export default leaveSlice.reducer