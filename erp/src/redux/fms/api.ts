import { createAsyncThunk } from '@reduxjs/toolkit'
import apiEndpoints from 'const/apiEndpoints'
import api from 'services'
import { AddFeeDescriptionPayload, AddFeeMasterPayload, feAddResponse, getAllfee, GetStudentResponse, StudentListPayload } from './typings'
import history from 'const/history'
import strings from 'locale/en'
import ROUTES from 'const/routes'

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
  async (id, { dispatch }): Promise<any> => {
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
    const response = await api.get(
      `${apiEndpoints.getstudents}?pageNo=${pageNo}&size=30`
    )

    return response?.data
  }
)

export const editFeeDescriptionRequest = createAsyncThunk(
  'fms/editFeeMaster',
  async ({
    id,
    title,
    description,
  }: AddFeeDescriptionPayload): Promise<any> => {
    const response = await api.put(
      `${apiEndpoints.editDescription}?description=${description}&title=${title}&id=${id}`
    )
    if (response) {
      history.goBack()
    }
    return response
  }
)


export const addFeePayment = createAsyncThunk(
  'fms/addFeePayment',
  async (payload: any, { rejectWithValue }): Promise<feAddResponse | any> => {
    try {
      const response = await api.put(`${apiEndpoints.feePayment}`, payload)
      console.log(response)
      if (!response) {
        return rejectWithValue(strings.pay.pamentFailed)
      }
      if (response?.data) {
        history.push(ROUTES.RECEIPTPRINT)
      }
      return response?.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(strings.pay.pamentFailed)
    }
  }
)

export const fetchReceiptlist = createAsyncThunk(
  'feelist/fetchfeeList',
  async (payload: any, { rejectWithValue }): Promise<any> => {
    try {
      const response = await api.put(`${apiEndpoints.feeReceiptList}`, payload)
      if (!response) {
        return rejectWithValue('Error')
      }
      return response?.data
    } catch (error) {
      console.log(error);
      rejectWithValue('error')

    }
  }
)

export const getAllFees = createAsyncThunk(
  'fees/allfees',
  async (): Promise<Array<getAllfee>> => {
    const response = await api.get(apiEndpoints.getallFees)
    return response?.data
  }
)

export const getStudentList = createAsyncThunk(
  'coachingId/allStudent',
  async ({
    coachingCentreId,
    batchId,
    branchId,
    pageNo,
    type
  }: StudentListPayload): Promise<GetStudentResponse> => {
    const requestPayload = {
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
    } = await api.post(`${apiEndpoints.getAllStudentList}`, requestPayload)
    const responseDate = {
      adminList,
      page,
      pageSize,
      totalCount,
      totalPages,
      coachingCentreId: coachingCentreId || '',
      branchId: branchId || '',
      batchId: batchId || ''
    }
    return responseDate
  }
)