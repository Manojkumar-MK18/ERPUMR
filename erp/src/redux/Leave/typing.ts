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

export interface ApplyLeave {
    leaveType: string
    fromDate: string | Date
    toDate: string | Date
    remarks: string
    leaveName: string
    dayStatus: string
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
    id: string
    leaveType: string
    fromDate: string
    toDate: string
    dayStatus: string
    remarks: string
    action: string
    leaveName: string
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
    applyLeaveDetails: ApplyLeave
    adddesignation: NewDesignation
    addStaff: NewStaff
    getLeave: Array<GetLeaveDetailsPayload>
}
