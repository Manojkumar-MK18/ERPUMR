import { Teacher } from "redux/academic/typings"
import { Dropdown } from "redux/typings"

export type DropdownList = Array<Dropdown>

export type AdminType =
    | 'SUPERADMIN'
    | 'BRANCHADMIN'
    | 'COACHINGADMIN'
    | 'COACH'
    | 'STUDENT'


export interface LessonPlaneList {
    course: string
    subject: string
    chapter: string
    topic: string
    assignedDate: string
}

export interface LessonPlaneListResponse {
    lessonplan: Array<LessonPlaneList>
    currentPage: number
    totalPages: number
    totalItems?: number
}

export interface GetTeacherPayload {
    coachingCentreId?: string
    branchId?: string
    batchId?: string
    pageNo?: number
    type: AdminType
}

export interface Admin {
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
    email: string
    enrollmentNumber?: string
    fatherName: string
    firstName: string
    id: string
    lastName: string
    mobileNumber: string
    profileImagePath?: any
    qualification?: string
    salutation?: string
    shortDiscription?: string
    state?: string
    status: string
    studentAccess?: boolean
    subject?: string
    updatedAt?: number
    updatedBy?: any
    uploadFileId?: string
    userId?: string
    userType: string
    yearOfExperience?: string
    zipCode?: string
    password?: string
}


export interface GetTeacherResponse {
    adminList: Array<Teacher>
    page: number
    pageSize: number
    totalCount: number
    totalPages: number
    coachingCentreId: string
    branchId: string
    batchId: string
}

export interface LessonPalne {
    course?: string
    subject?: string
    chapter?: string
    topic?: string
}

export interface LessonAssignPayload {
    institute: string
    lessonplanList: Array<LessonPalne>
    listofBranches: any
    listOfFaculties: any
    status: string
}

export interface LessonName {
    name: string
}

export interface LessonNameResponse {
    courseId: string
}

export interface courseLessonAssignDetail {
    userId: string
    name: any
    date: string
}

export interface courseLessonDetail {
    course: string
    subject: string
    chapter: string
    topic: string
}

export interface AssignLessonByTeacher {
    id: string
    courseLessonAssignDetailDao: Array<courseLessonAssignDetail>
    courseLessonDetailDao: Array<courseLessonDetail>
}

export interface CourseLessonDetailResponse {
    chapter: string
    completionDate: string
    course: string
    date: string
    detailAssignId: string
    sessionName: string
    status: string
    subject: string
    topic: string
    userId: string
    userName: string
    assignedDate: string
}

export interface getLessonPlaneResponse {
    courseId: string
    courseLessonDetailDaos: Array<CourseLessonDetailResponse>
    name: string
    type: string
}

export interface InitialState {
    isLoading: boolean
    lessonPlaneList: LessonPlaneListResponse | null
    teacherList: Array<Admin>
    lessonAssign: LessonAssignPayload | null,
    statusList: DropdownList,
    lessonName: LessonName,
    lessonNameResponse: LessonNameResponse
    assignLesoonNameByTeacher: AssignLessonByTeacher,
    getAllLessonPlane: Array<getLessonPlaneResponse> | null
}