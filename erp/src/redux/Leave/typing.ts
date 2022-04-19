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

export interface ApplyLeaveDate {
    fromDate: string
    toDate: string
}

export interface UpdateFormValue {
    key: string
    value: string | Date
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
    selectFormValues: ApplyLeaveDate | any
    adddesignation: NewDesignation
    addStaff: NewStaff
}
