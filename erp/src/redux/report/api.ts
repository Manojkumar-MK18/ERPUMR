import { createAsyncThunk } from "@reduxjs/toolkit";
import apiEndpoints from "const/apiEndpoints";
import api from "services";

export const fetchDayBookReport = createAsyncThunk(
    'studentRegistration/fetchDayBookReport',
    async (payload: any, { rejectWithValue }): Promise<any> => {
      try {
        const response = await api.put(`${apiEndpoints.getDayBookReport}`, payload)
        if (!response) {
          return rejectWithValue('strings.dayBookReport.error')
        }
        return response?.data
      } catch (error) {
        console.log(error)
        return rejectWithValue('strings.dayBookReport.error')
      }
    }
  )
  