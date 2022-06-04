import { createAsyncThunk } from "@reduxjs/toolkit";
import apiEndpoints from "const/apiEndpoints";
import api from "services";
import { GetTeacherPayload, GetTeacherResponse } from "./typing";

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

export const TeacherList = createAsyncThunk(
    'list/getTeacherList',
    async ({
        coachingCentreId,
        branchId,
        batchId,
        pageNo,
        type
    }: GetTeacherPayload): Promise<GetTeacherResponse> => {
        const payloadData = {
            ascDesc: 'Desc',
            batchIds: null,
            branchIds: null,
            coachingCenterId: null,
            pageNo: pageNo || 1,
            pageSize: 20,
            searchCriteria: { userType: type },
            sortBy: 'created_at'
        }
        const {
            data: { data: adminList, page, pageSize, totalCount, totalPages }
        } = await api.post(`${apiEndpoints.getTeacherList}`, payloadData)
        const responseData = {
            adminList,
            page,
            pageSize,
            totalCount,
            totalPages,
            coachingCentreId: coachingCentreId || '',
            branchId: branchId || '',
            batchId: batchId || ''
        }
        return responseData
    }
)

export const AssignLessonPlaneUser = createAsyncThunk(
    'lessonPlane/AssignLessonPlaneUser',
    async (requestPayload: any): Promise<any> => {
        const response = await api.post(`${apiEndpoints.getAssignLessonPalne}`, requestPayload)
        return response?.data
    }
)

export const lessonPalnelist = createAsyncThunk(
    'lesson/getlesson',
    async (): Promise<any> => {
        const response = await api.get(apiEndpoints.getLessonList)
        return response?.data
    }
)