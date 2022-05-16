import { createAsyncThunk } from "@reduxjs/toolkit";
import apiEndpoints from "const/apiEndpoints";
import api from "services";

export const AssignLessonPalnApi = createAsyncThunk(
    'lessonPlane/AssignLessonPlane',
    async (requestPayload: any): Promise<any> => {
        const response = await api.post(`${apiEndpoints.assignLessonPlane}`, requestPayload)
        return response?.data
    }
)

export const LessonPlaneListApi = createAsyncThunk(
    'lessonPale/List',
    async (page: number): Promise<any> => {
        const response = await api.get(`${apiEndpoints.lessonplanebyPage}?page=${page}&size=1`)
        return response?.data
    }
)

//ntwor
export const lessonPlaneListApi2 = createAsyncThunk(
    'lesson/list',
    async (): Promise<Array<any>> => {
        const response = await api.get(apiEndpoints.lessonPlaneList)
        return response?.data
    }
)