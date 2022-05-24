import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LessonPlaneListApi } from './api'
import { InitialState, LessonPlaneListResponse } from './typing'

const initialState: InitialState = {
    isLoading: false,
    lessonPlaneList: null,
    teacherList: [],
    lessonAssign: null
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
        }
    }
})

export default lessonSlice.reducer
