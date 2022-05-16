import { createAsyncThunk } from "@reduxjs/toolkit";
import apiEndpoints from "const/apiEndpoints";
import api from "services";
import { LessonplaebyDatePayload } from "./typing";

export const LessonPlaneDate = createAsyncThunk(
    'lesson/getlessonPlanebyDate',
    async ({
        date
    }: LessonplaebyDatePayload): Promise<any> => {
        const response = await api.get(`${apiEndpoints.lesson}${date}`)
        return response?.data
    }
)

export const LessonPlanDetailsApi = createAsyncThunk(
    'lesson/lessonPlaneDetails',
    async (): Promise<any> => {
        const response = await api.get(`${apiEndpoints.lessonPlanDetails}`)
        return response?.data
    }
)

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
        const response = await api.get(`${apiEndpoints.lessonplanebyPage}?page=${page}&size=30`)
        return response?.data
    }
)