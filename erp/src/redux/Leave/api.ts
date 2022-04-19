import { createAsyncThunk } from "@reduxjs/toolkit"
import apiEndpoints from "const/apiEndpoints"
import api from "services"
import { AddLeave, ApplyLeave, NewDesignation, NewStaff } from "./typing"

export const AddLeaveapi = createAsyncThunk(
    'leave/addLeave',
    async (requestData: AddLeave): Promise<AddLeave> => {
        const response = await api.post(apiEndpoints.addLeave, requestData)
        return response?.data
    }
)

export const applyLeaveApi = createAsyncThunk(
    'leave/applyLeave',
    async (requestData: ApplyLeave): Promise<ApplyLeave> => {
        const response = await api.post(apiEndpoints.applyLeave, requestData)
        return response?.data
    }
)

export const AddNewdesignationName = createAsyncThunk(
    'leave/addLeave',
    async (requestData: NewDesignation): Promise<NewDesignation> => {
        const response = await api.post(apiEndpoints.newDesignation, requestData)
        return response?.data
    }
)

export const AddNewStaff = createAsyncThunk(
    'leave/addLeave',
    async (requestData: NewStaff): Promise<NewStaff> => {
        const response = await api.post(apiEndpoints.newStaff, requestData)
        return response?.data
    }
)