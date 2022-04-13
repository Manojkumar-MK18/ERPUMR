import { createAsyncThunk } from '@reduxjs/toolkit'
import apiEndpoints from 'const/apiEndpoints'
import api from 'services'
import { Course } from './typings'

export const getCourses = createAsyncThunk(
  'academic/getCourses',
  async (): Promise<Array<Course>> => {
    const response = await api.get(apiEndpoints.getCourses)
    return response?.data
  }
)

export default getCourses
