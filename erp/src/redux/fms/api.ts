import { createAsyncThunk } from '@reduxjs/toolkit'
import apiEndpoints from 'const/apiEndpoints'
import api from 'services'
import { AddFeeDescriptionPayload, AddFeeMasterPayload } from './typings'
import history from 'const/history'

export const addNewFeeDescription = createAsyncThunk(
  'fms/addFeeDescription',
  async ({ title, description }: AddFeeDescriptionPayload): Promise<any> => {
    const response = await api.put(
      `${apiEndpoints.addFeeDescription}?description=${description}&title=${title}`
    )
    if (response) {
      history.goBack()
    }
    return response
  }
)

export const addNewFeeMaster = createAsyncThunk(
  'fms/addNewFeeMaster',
  async ({
    title,
    description,
    academicYear,
    year,
    terms,
    courseId,
    amount,
    regType
  }: AddFeeMasterPayload): Promise<any> => {
    const response = await api.put(
      `${apiEndpoints.addFeeMaster}?description=${description}&amount=${amount}&title=${title}&terms=${terms}&academicYear=${academicYear}&year=${year}&courseId=${courseId}&regType=${regType}`
    )
    if (response) {
      history.goBack()
    }
    return response
  }
)

export const getFeeDescriptions = createAsyncThunk(
  'fms/getFeeDescriptions',
  async (): Promise<any> => {
    const response = await api.get(apiEndpoints.getFeeDescription)
    return response?.data
  }
)

export const getFeeMaster = createAsyncThunk(
  'fms/getFeeMaster',
  async (): Promise<any> => {
    const response = await api.get(apiEndpoints.getFeeMaster)
    return response?.data
  }
)

export const deleteFeeMaster = createAsyncThunk(
  'fms/deleteFeeMaster',
  async (id: string, { dispatch }): Promise<any> => {
    const response = await api.delete(
      `${apiEndpoints.deleteFeeMaster}?id=${id}`
    )

    dispatch(getFeeMaster())

    return response?.data
  }
)

export const editFeeMasterRequest = createAsyncThunk(
  'fms/editFeeMaster',
  async ({
    id,
    title,
    description,
    academicYear,
    year,
    terms,
    courseId,
    amount,
    regType
  }: AddFeeMasterPayload): Promise<any> => {
    const response = await api.put(
      `${apiEndpoints.editFeeMaster}?id=${id}&description=${description}&amount=${amount}&title=${title}&terms=${terms}&academicYear=${academicYear}&year=${year}&courseId=${courseId}&regType=${regType}`
    )
    if (response) {
      history.goBack()
    }
    return response
  }
)

export const getStudentAdmissionList = createAsyncThunk(
  'fms/getStudentAdmissionList',
  async (pageNo: number): Promise<any> => {
    const payloadData = {
      ascDesc: 'Desc',
      batchIds: null,
      branchIds: null,
      coachingCenterId: null,
      pageNo: pageNo || 1,
      pageSize: 30,
      searchCriteria: { userType: 'STUDENT' },
      sortBy: 'created_at'
    }

    const response = await api.post(`${apiEndpoints.getstudents}`, payloadData)

    return response?.data
  }
)
