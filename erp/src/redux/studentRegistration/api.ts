import { createAsyncThunk } from "@reduxjs/toolkit" 
import apiEndpoints from "const/apiEndpoints"
import api from "services"
import StudentRegistration, { ChildInformation, CommunicationDetails, CourseDetails, PermanentDetails,QualifyingDetails } from "./typings"

export const AddChildApi = createAsyncThunk(
    'child/addChild',
    async (requestData: ChildInformation): Promise<ChildInformation> => {
        const response = await api.post(apiEndpoints.register,requestData)
        return response?.data
    }
)

export const AddCommunicationApi = createAsyncThunk(
    'communication/addCommunication',
    async (requestData: CommunicationDetails): Promise<CommunicationDetails> => {
        const response = await api.post(apiEndpoints.register,requestData)
        return response?.data
    }
)

export const AddPermenentApi = createAsyncThunk(
    'permenentadd/addPermenentAdd',
    async (requestData: PermanentDetails): Promise<PermanentDetails> => {
        const response = await api.post(apiEndpoints.register,requestData)
        return response?.data
    }
)

export const AddQualifyApi = createAsyncThunk(
    'qualify/addQualify',
    async (requestData: QualifyingDetails): Promise<QualifyingDetails> => {
        const response = await api.post(apiEndpoints.register,requestData)
        return response?.data
    }
)

export const AddCourseApi = createAsyncThunk(
    'course/addCourse',
    async (requestData: CourseDetails): Promise<CourseDetails> => {
        const response = await api.post(apiEndpoints.register,requestData)
        return response?.data
    }
)

export const studentRegistration = createAsyncThunk(
    'register/addRegister',
    async (requestData: StudentRegistration): Promise<StudentRegistration> => {
        const response = await api.post(apiEndpoints.register,requestData)
        return response?.data
    }
)

