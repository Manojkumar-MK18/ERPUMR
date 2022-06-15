import { createAsyncThunk } from "@reduxjs/toolkit";
import apiEndpoints from "const/apiEndpoints";
import history from "const/history";
import ROUTES from "const/routes";
import api from "services";
import {
    AssignLessonByTeacher,
    CourseLessonDetailResponse,
    GetTeacherPayload,
    GetTeacherResponse,
    LessonNameResponse
} from "./typing";

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

export const createLessonNameApi = createAsyncThunk(
    'lesson/createLesson',
    async (requestPayload: any): Promise<any> => {
        const response = await api.post(`${apiEndpoints.createLessonName}`, requestPayload)
        if (response?.data) {
            history.push(ROUTES.CREATE_LESSON)
        }
        return response?.data
    }
)

export const assignLessonNameByTeacher = createAsyncThunk(
    'lesson/assignLesson',
    async (requestPayload: AssignLessonByTeacher): Promise<LessonNameResponse> => {
        const response = await api.post(`${apiEndpoints.assignLessonplaneByTeacher}`, requestPayload)
        if (response?.data) {
            history.push(ROUTES.LESSON_UPDATES)
        }
        return response?.data
    }
)

export const getLessonplan = createAsyncThunk(
    'lesson/getLessonPalne',
    async (): Promise<CourseLessonDetailResponse> => {
        const response = await api.get(apiEndpoints.getLessonPlane)
        return response?.data
    }
)