import {
    AddLeaveapi,
    applyLeaveApi,
    AddNewdesignationName,
    AddNewStaff
} from "./api";
import { leaveSlice } from "./reducer";

const { updateSelectedUser, updteFormValues } = leaveSlice.actions

export {
    updateSelectedUser,
    AddLeaveapi,
    applyLeaveApi,
    updteFormValues,
    AddNewdesignationName,
    AddNewStaff
}