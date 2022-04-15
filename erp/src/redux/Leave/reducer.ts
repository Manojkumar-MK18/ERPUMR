import { createSlice } from '@reduxjs/toolkit'
import { LeaveState } from './typing'
import { encassableList } from './const'

const initialState: LeaveState = {
    encassable: encassableList
}

export const leaveSlice = createSlice({
    name: 'leave',
    initialState,
    reducers: {}
})

export default leaveSlice.reducer