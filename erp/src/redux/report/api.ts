import { createAsyncThunk } from "@reduxjs/toolkit";
import apiEndpoints from "const/apiEndpoints";
import api from "services";

export const fetchDayBookReport = createAsyncThunk(
  'studentRegistration/studentRegistration',
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

export const fetchdayBookReportByInstitte = createAsyncThunk(
  'studentRegistration/studentRegistrationbyIns',
  async (payload: any): Promise<any> => {
    const response = await api.put(`${apiEndpoints.getfeeListbyInstitute}`, payload)
    return response?.data
  }
)
