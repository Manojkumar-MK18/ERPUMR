import { createAsyncThunk } from "@reduxjs/toolkit";
import apiEndpoints from "const/apiEndpoints";
import api from "services";

export const saveRole = createAsyncThunk(
    'role/saveRole',
    async ({
        name
    }: any): Promise<any> => {
        const response = await api.post(`${apiEndpoints.saveRole}${name}`)
        return response?.data
    }
)