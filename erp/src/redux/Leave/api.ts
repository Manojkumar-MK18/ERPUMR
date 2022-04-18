import { createAsyncThunk } from "@reduxjs/toolkit"
import apiEndpoints from "const/apiEndpoints"
import api from "services"
import { AddLeave, ApplyLeave } from "./typing"

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