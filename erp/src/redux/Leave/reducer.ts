import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
    AddLeave,
    AddLeavebyUserId,
    GetLeaveDetailsPayload,
    LeaveState,
    NewDesignation,
    NewStaff,
} from './typing'
import { encassableList, leaveType, marrtialStatus, staffRole } from './const'
import { AddLeaveapi, AddNewdesignationName, AddNewStaff, applyLeaveApi, getLeaveDetails } from './api'
import { nationalityList, genderList } from '../../redux/academic/const'

const initialState: LeaveState = {
    encassable: encassableList,
    leaveType: leaveType,
    gender: genderList,
    nationality: nationalityList,
    marital_Status: marrtialStatus,
    technical_flag: staffRole,
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
    adddesignation: {
        designationName: ''
    },
    addStaff: {
        technical_flag: '',
        department: '',
        firstName: '',
        lastName: '',
        gender: '',
        address: '',
        dob: '',
        marital_Status: '',
        mobileNumber: '',
        emailID: '',
        qualification: '',
        nationality: '',
        blood_Group: ''
    },
    getLeave:[]
        
}

export const leaveSlice = createSlice({
    name: 'leave',
    initialState,
    reducers: {
        updateSelectedUser: (state, action: PayloadAction<AddLeavebyUserId>) => {
            state.selectedUser = action?.payload
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
        [applyLeaveApi.fulfilled.toString()]: (state, action: PayloadAction<GetLeaveDetailsPayload>) => {
            state.isLoading = false
            state.applyLeaveDetails = action?.payload
        },
        [applyLeaveApi.rejected.toString()]: (state) => {
            state.isLoading = false;
        },
        [AddNewdesignationName.pending.toString()]: (state) => {
            state.isLoading = true;
        },
        [AddNewdesignationName.fulfilled.toString()]: (state, action: PayloadAction<NewDesignation>) => {
            state.isLoading = false
            state.adddesignation = action?.payload
        },
        [AddNewdesignationName.rejected.toString()]: (state) => {
            state.isLoading = false;
        },
        [AddNewStaff.pending.toString()]: (state) => {
            state.isLoading = true;
        },
        [AddNewStaff.fulfilled.toString()]: (state, action: PayloadAction<NewStaff>) => {
            state.isLoading = false
            state.addStaff = action?.payload
        },
        [AddNewStaff.rejected.toString()]: (state) => {
            state.isLoading = false;
        },
        [getLeaveDetails.pending.toString()]: (state) => {
            state.isLoading = true;
        },
        [getLeaveDetails.fulfilled.toString()]: (state, action: PayloadAction<Array<GetLeaveDetailsPayload>>) => {
            state.isLoading = false
            state.getLeave = action?.payload
        },
        [getLeaveDetails.rejected.toString()]: (state) => {
            state.isLoading = false;
        },
    }
})

export default leaveSlice.reducer