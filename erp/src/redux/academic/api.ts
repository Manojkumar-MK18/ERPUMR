import { createAsyncThunk } from '@reduxjs/toolkit'
import apiEndpoints from 'const/apiEndpoints'
import api from 'services'
import {
  Branch,
  Course,
  Institute,
  getBranchesForCoursePayload,
  getBatchesForCoursePayload,
  Batch,
  GetChildCoursesPayload,
  GetChildCoursesResponse,
  GetBranchesPayload,
  GetAdminResponse,
  GetAdminPayload, 
} from './typings' 

export const getAdminList = createAsyncThunk(
  'coachingCenter/getAdminList',
  async ({
    coachingCentreId,
    branchId,
    batchId,
    pageNo,
    type
  }: GetAdminPayload): Promise<GetAdminResponse> => {
    const payloadData = {
      ascDesc: 'Desc',
      batchIds: batchId ? [batchId] : null,
      branchIds: branchId ? [branchId] : null,
      coachingCenterId: coachingCentreId || null,
      pageNo: pageNo || 1,
      pageSize: 20,
      searchCriteria: { userType: type },
      sortBy: 'created_at'
    }

    const {
      data: { data: adminList, page, pageSize, totalCount, totalPages }
    } = await api.post(`${apiEndpoints.getAdminList}`, payloadData)
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

export const getCourses = createAsyncThunk(
  'academic/getCourses',
  async (): Promise<Array<Course>> => {
    const response = await api.get(apiEndpoints.getCourses)
    return response?.data
  }
)

export const getInstitutes = createAsyncThunk(
  'academic/getInstitutes',
  async (): Promise<Array<Institute>> => {
    const data = {
      ascDesc: 'Desc',
      pageNo: '1',
      pageSize: '100',
      searchCriteria: {},
      sortBy: 'createdAt'
    }
    const response = await api.post(`${apiEndpoints.getInstitutes}`, data)
    return response?.data?.content
  }
)

export const getBranchesByInstitute = createAsyncThunk(
  'academic/getBranchesByInstitute',
  async ({
    coachingCentreId,
    courseId
  }: getBranchesForCoursePayload): Promise<Array<Branch>> => {
    const response = await api.get(
      `${apiEndpoints.getBranchesForCourse}?coachingCentreId=${coachingCentreId}&courseId=${courseId}`
    )
    return response?.data
  }
)

export const getAllCoursesByInstitute = createAsyncThunk(
  'academic/getAllCoursesByInstitute',
  async (coachingCentreId: string): Promise<Array<Course>> => {
    const response = await api.get(
      `${apiEndpoints.getAllCoursesByInstitute}?coachingCentreId=${coachingCentreId}`
    )
    return response?.data
  }
)

export const getBatchesForCourse = createAsyncThunk(
  'academic/getBatchesForCourse',
  async ({
    coachingCentreId,
    courseId,
    branchId
  }: getBatchesForCoursePayload): Promise<Array<Batch>> => {
    const response = await api.get(
      `${apiEndpoints.getBatchesForCourse}?coachingCentreId=${coachingCentreId}&courseId=${courseId}&branchIds=${branchId}`
    )
    return response?.data
  }
)

export default getCourses

export const getChildCourses = createAsyncThunk(
  'course/getChildCourses',
  async ({
    courseId,
    type
  }: GetChildCoursesPayload): Promise<GetChildCoursesResponse> => {
    const { data } = await api.get(`${apiEndpoints.getChildCourse}${courseId}`)
    return { response: data?.data, type }
  }
)

export const getBranches = createAsyncThunk(
  'coachingCenter/getBranches',
  async (
    { coachingCentreId, type }: GetBranchesPayload,
    { dispatch }
  ): Promise<Array<Branch>> => {
    const response = await api.get(
      `${apiEndpoints.getBranches}?coachingCentreId=${coachingCentreId}`
    )
    type && dispatch(({ coachingCentreId, type }))
    return response?.data
  }
)