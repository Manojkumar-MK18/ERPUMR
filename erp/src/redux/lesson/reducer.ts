import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createLessonNameApi, getLessonbyUserId, getLessonplan, LessonPlaneListApi, TeacherList } from './api'
import { Admin, getLessonPlaneResponse, InitialState, LessonName, LessonNameResponse, LessonPlaneListResponse, lessonResponse } from './typing'
import { status } from './const'

const initialState: InitialState = {
    isLoading: false,
    lessonPlaneList: null,
    teacherList: [],
    lessonAssign: null,
    statusList: status,
    lessonName: {
        name: ''
    },
    assignLesoonNameByTeacher: {
        id: '',
        courseLessonAssignDetailDao: [],
        courseLessonDetailDao: []
    },
    lessonNameResponse: {
        courseId: ''
    },
    getAllLessonPlane: [],
    getLessonResponsebyUserId: []
}


export const lessonSlice = createSlice({
    name: 'lesson',
    initialState,
    reducers: {},
    extraReducers: {
        [LessonPlaneListApi.fulfilled.toString()]: (
            state,
            action: PayloadAction<LessonPlaneListResponse>
        ) => {
            state.isLoading = false
            state.lessonPlaneList = action?.payload
        },
        [TeacherList.fulfilled.toString()]: (
            state,
            action: PayloadAction<Array<Admin>>
        ) => {
            state.teacherList = action.payload
        },
        [createLessonNameApi.fulfilled.toString()]: (
            state,
            action: PayloadAction<LessonName>
        ) => {
            state.lessonName = action.payload
        },
        [createLessonNameApi.fulfilled.toString()]: (
            state,
            action: PayloadAction<LessonNameResponse>
        ) => {
            state.lessonNameResponse = action.payload
        },
        [getLessonplan.fulfilled.toString()]: (
            state,
            action: PayloadAction<Array<getLessonPlaneResponse>>
        ) => {
            state.getAllLessonPlane = action.payload
        },
        [getLessonbyUserId.fulfilled.toString()]: (
            state,
            action: PayloadAction<Array<lessonResponse>>
        ) => {
            state.getLessonResponsebyUserId = action.payload
        }
    }
})

export default lessonSlice.reducer
