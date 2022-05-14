import { createSlice } from '@reduxjs/toolkit'
import { InitialState } from './typing'

const initialState: InitialState = {

}


export const lessonSlice = createSlice({
    name: 'lesson',
    initialState,
    reducers: {},
    extraReducers: {}
})

export default lessonSlice.reducer
