import { Dropdown } from '../typings'

export type DropdownList = Array<Dropdown>

export interface Course {
  id: string
  courseName: string
  coachingCentreId: string
  parentId: string
  parentName: string
  status: string
  description: string
}

export interface Institute {
  address1: string
  address2: string
  city: string
  coachingCenterCode: string
  coachingCentreName: string
  country: string
  createdAt?: number
  createdBy?: null
  email: string
  expiryOn: string
  id: string
  logoUrl?: string
  mobileNumber: string
  additionalCourses?: Array<any>
  questionLimit: string
  state: string
  status: string
  updatedAt?: number
  updatedBy?: number
  zipCode: string
  studentCount: string
  teacherCount: string
}

export interface Branch {
  address1: string
  address2: string
  branchName: string
  city: string
  coachingCenterId: string
  country: string
  courseIds: any
  courseList?: any
  createdAt?: number
  createdBy?: any
  email: string
  id: string
  isMainBranch: string
  mobileNumber: string
  questionLimit: string
  state: string
  status: string
  updatedAt?: number
  updatedBy?: any
  webexUserIds: any
  webexUsers?: any
  zipCode: string
}

export interface Batch {
  batchEndDate: string
  batchName: string
  batchSize: string
  batchStartDate: string
  coachingCenterBranchId: string
  coachingCenterId: string
  status: string
  updatedAt: number
  updatedBy: any
  createdAt: number
  createdBy: any
  description: string
  endTiming: string
  id: string
  startTiming: string
  coachingCentre?: any
  coachingCentreBranch?: any
  course?: any
}

export interface AcademicState {
  semester: DropdownList
  academicYear: DropdownList
  year: DropdownList
  university: DropdownList
  courseList: DropdownList
  syllabusList: DropdownList
  levelList: DropdownList
  genderList: DropdownList
  nationalityList: DropdownList
  categoryList: DropdownList
  admissionTypeList: DropdownList
  casteList: DropdownList
  feeTypeList: DropdownList
  termList: DropdownList
  combinationList: DropdownList
  primaryLanguageList: DropdownList
  secondaryLanguageList: DropdownList
  religionList: DropdownList
  bloodGroupList: DropdownList
  studentTypeList: DropdownList
  boardList: DropdownList
  stateList: DropdownList
  registrationTypeList: DropdownList
  instituteList: Array<Institute>
  branchList: Array<Branch>
  batchList: Array<Batch>
  mediumList: DropdownList
  qualififactionList: DropdownList
  paymentModes: DropdownList
}

export interface getBranchesForCoursePayload {
  coachingCentreId: string
  courseId: string
}

export interface getBatchesForCoursePayload {
  coachingCentreId: string
  courseId: string
  branchId: string
}
