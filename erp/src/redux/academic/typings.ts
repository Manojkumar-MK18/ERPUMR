import { AdminType } from 'const' 
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

export interface Teacher {
  aadhar: string
  academicYear: string
  address: string
  address1: string
  address2: string
  admissionNumber: string
  admissionType: string
  bloodGroup: string
  board: string

  bulk: string
  caste: string
  challenged: string
  city: string
  classId: string
  coachingCenterId: string

  combination: string
  community: string
  country: string
  createdAt: 1623588168000
  createdBy: string
  district: string
  dob: string
  email: string
  fatherName: string
  firstName: string
  gender: string
  id: string
  lang1: string
  lang2: string
  lastAttended: string
  lastName: string
  markObtained: string
  medium: string
  mobileNumber: string
  nationality: string
  newType: string
  parentNumber: string
  regNo: string
  religion: string
  salutation: string
  shortDiscription: string
  state: string
  status: string
  subject: string
}

export interface GetChildCoursesPayload {
  courseId: string
  type: string
}

export interface GetChildCoursesResponse {
  response: Array<Course>
  type?: string
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
  paymentModes: DropdownList,
  subjects: Array<Course>
  chapters: Array<Course>
  topics: Array<Course>
  teachersList: Array<Teacher>
  subjectlist: DropdownList
  chapterList: DropdownList
  topicList: DropdownList
  statuslist: DropdownList
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

export interface GetBranchesPayload {
  coachingCentreId: string
  type?: AdminType
}
 