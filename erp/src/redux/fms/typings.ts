import { Dropdown } from '../typings'

export type DropdownList = Array<Dropdown>

export interface AddFeeDescriptionResponse {
  id: number
  description: string
  title: string
  amount: string
  terms?: string
  courseId?: string
  academicYear?: string
  feeTypeList?: string
  termList?: string
  year?: string
  regType?: string
}

export interface TotalFeeUpdate {
  amount?: string
}

interface User {
  id: string
  userName: string
}

export interface coachi {
  coachingCentreName: string
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
  coachingCentre?: coachi | any
  country?: string
  createdAt?: number
  createdBy?: string
  courseId?: any
  dob?: string
  email?: string
  courseName?: string
  enrollmentNumber?: string
  fatherName?: string
  firstName?: string
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

export interface FeeDetails {
  amount: string | any
  academicYear?: string | any
}
export interface Payment {
  cash: string
  dateOn: string
}

export interface feAddResponse {
  amount: string
  balance: string
  createdAt: string
  createdBy: null
  date: string
  description: string
  id: string
  modeOfPayment: string
  paid: string
  paidTypes: string
  referenceId: string
  studentId: string
  studentRef: string
  updatedAt: string
  updatedBy: string
  userDetail: string
}

export interface getAllfee {
  amount: number
  balance: string
  createdAt: string
  createdBy: string
  date: string
  description: string
  id: string
  modeOfPayment: string
  paid: string
  paidTypes: string
  referenceId: string
  studentId: string
  studentRef: string
  updatedAt: string
  updatedBy: string
  userDetail: string
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
  updateStudent: Array<Student>
  selectedStudentDetails: Student | null
  selectedFeeDetails: FeeDetails | null
  selectedFeetotalDetails: FeeDetails | null
  selectedPaymentMode: Payment | null
  receiptlist: Array<any>
  feeAdd: feAddResponse | null
  getallFee: Array<getAllfee>
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