import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LessonPlaneListApi, TeacherList } from './api'
import { Admin, InitialState, LessonPlaneListResponse } from './typing'
import { status } from './const'

const initialState: InitialState = {
    isLoading: false,
    lessonPlaneList: null,
    teacherList: [],
    lessonAssign: null,
    statusList: status
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
        }
    }
})

export default lessonSlice.reducer
