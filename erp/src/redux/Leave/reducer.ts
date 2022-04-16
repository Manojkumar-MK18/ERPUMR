import { createSlice } from '@reduxjs/toolkit'
import { LeaveState } from './typing'
import { encassableList, leaveType } from './const'

const initialState: LeaveState = {
    encassable: encassableList,
    leaveType:leaveType
}

export const leaveSlice = createSlice({
    name: 'leave',
    initialState,
    reducers: {}
})

export default leaveSlice.reducer