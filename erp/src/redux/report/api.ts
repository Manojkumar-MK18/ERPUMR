import { createAsyncThunk } from "@reduxjs/toolkit";
import apiEndpoints from "const/apiEndpoints";
import api from "services";
import { DaybookResponse } from "./types";

export const DayBookApi = createAsyncThunk(
    'book/getDayBook',
    async ({
        from,
        toDate,
        type
    }: DaybookResponse): Promise<any> => {
        const response = await api.put(`${apiEndpoints.getDayBookReport}?from=${from}&toDate=${toDate}&type=${type}`)
        return response?.data
    }
)

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
  