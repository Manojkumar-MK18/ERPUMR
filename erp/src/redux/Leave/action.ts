import {
    AddLeaveapi,
    applyLeaveApi,
    AddNewdesignationName,
    AddNewStaff
} from "./api";
import { leaveSlice } from "./reducer";

const { updateSelectedUser } = leaveSlice.actions

export {
    updateSelectedUser,
    AddLeaveapi,
    applyLeaveApi,
    AddNewdesignationName,
    AddNewStaff
}