import { Dropdown } from '../typings'

export type DropdownList = Array<Dropdown>

export interface AddLeave {
    leaveName: string
    leaveDescription: string
    encashable: string
    adminType: string
    userId: string
}

export interface AddLeavebyUserId {
    adminType: string
    userId: string
}

export interface NewDesignation {
    designationName: string
}

export interface NewStaff {
    technical_flag: string
    department: string
    firstName: string
    lastName: string
    gender: string
    address: string
    dob: string
    marital_Status: string
    mobileNumber: string
    emailID: string
    qualification: string
    nationality: string
    blood_Group: string
}

export interface GetLeaveDetailsPayload {
    leaveType: string
    fromDate: string
    toDate: string
    dayStatus: string
    remarks: string
    leaveName: string
}

export interface GetStaffList {
    technical_flag: string
    department: string
    firstName: string
    lastName: string
    gender: string
    address: string
    dob: string
    marital_Status: string
    mobileNumber: string
    emailID: string
    qualification: string
    nationality: string
    blood_Group: string
}

export interface GetDesginationList {
    designationName: string
    designationId: string
}

export interface GetLeaveMasterList{
    id:string
    adminType:string
}

export interface LeaveState {
    isLoading: boolean
    encassable: DropdownList
    leaveType: DropdownList
    gender: DropdownList,
    nationality: DropdownList
    technical_flag: DropdownList
    marital_Status: DropdownList
    addLeaveDetails: AddLeave
    selectedUser: AddLeavebyUserId
    applyLeaveDetails: GetLeaveDetailsPayload
    adddesignation: NewDesignation
    addStaff: NewStaff
    getLeave: Array<GetLeaveDetailsPayload>
    getStaffList: Array<GetStaffList>
    getDesginationList: Array<GetDesginationList>
    setStaffSelected: GetStaffList | null
    getLeaveMasterList: Array<GetLeaveMasterList>
}
