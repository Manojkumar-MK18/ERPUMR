import { createAsyncThunk } from "@reduxjs/toolkit"
import apiEndpoints from "const/apiEndpoints"
import history from "const/history"
import api from "services"
import { AddLeave, GetLeaveDetailsPayload, NewDesignation, NewStaff } from "./typing"

export const AddLeaveapi = createAsyncThunk(
    'leave/addLeave',
    async (requestData: AddLeave): Promise<AddLeave> => {
        const response = await api.post(apiEndpoints.addLeave, requestData)
        return response?.data
    }
)

export const applyLeaveApi = createAsyncThunk(
    'leave/applyLeave',
    async ({
        leaveType,
        fromDate,
        toDate,
        dayStatus,
        remarks,
        leaveName
    }: GetLeaveDetailsPayload): Promise<any> => {
        const response = await api.post(
            `${apiEndpoints.applyLeave}?leaveType=${leaveType}&fromDate=${fromDate}&toDate=${toDate}&dayStatus=${dayStatus}&remarks=${remarks}&leaveName=${leaveName}`
        )
        return response?.data
    }
)

export const AddNewdesignationName = createAsyncThunk(
    'designation/addDesgination',
    async (requestData: NewDesignation): Promise<NewDesignation> => {
        const response = await api.post(`${apiEndpoints.addDesignation}`, requestData)
        if (response) {
            history.goBack()
        }
        return response?.data
    }
)

export const GetDesginationListApi = createAsyncThunk(
    ' des/getDesginationList',
    async (): Promise<any> => {
        const response = await api.get(apiEndpoints.getDesginationList)
        return response?.data
    }
)

export const AddNewStaff = createAsyncThunk(
    'staff/addNewStaff',
    async (requestData: NewStaff): Promise<NewStaff> => {
        const response = await api.post(apiEndpoints.staffRegistration, requestData)
        if (response?.data) {
            history.goBack()
        }
        return response?.data
    }
)

export const GetStaffListApi = createAsyncThunk(
    ' staff/getStaffList',
    async (): Promise<any> => {
        const response = await api.get(apiEndpoints.getSatffList)
        return response?.data
    }
)

export const getLeaveDetails = createAsyncThunk(
    'leave/leaveDetails',
    async (): Promise<Array<GetLeaveDetailsPayload>> => {
        const response = await api.get(apiEndpoints.getLeave)
        return response?.request
    }
)

export const GetLeaveMasterListApi = createAsyncThunk(
    'leavemaster/getLeaveMasterList',
    async (): Promise<any> => {
        const response = await api.get(apiEndpoints.getLeaveMasterList)
        return response?.data
    }
)