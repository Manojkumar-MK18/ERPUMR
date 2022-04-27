import {
    AddLeaveapi,
    applyLeaveApi,
    AddNewdesignationName,
    AddNewStaff
} from "./api";
import { leaveSlice } from "./reducer";

const { updateSelectedUser, updateStaffDetails } = leaveSlice.actions

export {
    updateSelectedUser,
    AddLeaveapi,
    applyLeaveApi,
    AddNewdesignationName,
    AddNewStaff,
    updateStaffDetails
}