import { Dropdown } from '../typings'

export type DropdownList = Array<Dropdown>

export interface AddFeeDescriptionResponse {
  id: number
  description: string
  title: string
  amount?: string
  terms?: string
  courseId?: string
  academicYear?: string
  feeTypeList?: string
  termList?: string
  year?: string
  regType?: string
}

interface User {
  id: string
  userName: string
}

export interface Student {
  address1?: string
  address2?: string
  batchIds?: any
  batchList?: any
  branchIds?: any
  branchList?: any
  city?: string
  coachingCenterId?: string
  coachingCentre?: any
  country?: string
  createdAt?: number
  createdBy?: string
  courseId?: any
  dob?: string
  email?: string
  enrollmentNumber?: string
  fatherName?: string
  firstName: string
  id?: string
  lastName?: string
  mobileNumber?: string
  profileImagePath?: any
  qualification?: string
  salutation?: string
  shortDiscription?: string
  state?: string
  status?: string
  studentAccess?: boolean
  subject?: string
  updatedAt?: number
  updatedBy?: any
  uploadFileId?: string
  user?: User
  userId?: string
  userType?: string
  yearOfExperience?: string
  zipCode?: string
  regNo?: string
  parentNumber?: string
  aadhar?: string
  academicYear?: string
  yearOfPassing?: string
  studentName?: string
}

export interface StudentList {
  content: Array<Student>
  page: number
  pageSize: number
  totalCount: number
  totalPages: number
}

export interface AddFeeDescriptionState {
  feeDescriptionList: Array<AddFeeDescriptionResponse>
  feeDescriptionListDropdown: DropdownList
  isLoading: boolean
  editDescriptionId: number
  feeMasterList: Array<AddFeeDescriptionResponse>
  editFeeMaster: AddFeeDescriptionResponse | null
  studentApplicationList: StudentList | null
  error: string
  selectedStudentDetails: Student | null
}

export interface AddFeeMasterPayload {
  id?: string
  title: string
  description: string
  terms: string
  academicYear: string
  year: string
  courseId: string
  amount: string
  regType: string
}

export interface AddFeeDescriptionPayload {
  id?: any
  title: string
  description: string
}