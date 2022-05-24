import { Teacher } from "redux/academic/typings"

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
    assignedDate?: string
}

export interface LessonAssignPayload {
    institute: string
    lessonplanList: Array<LessonPalne>
    listofBranches: Array<string>
    listOfFaculties: Array<string>
    status: string
}

export interface InitialState {
    isLoading: boolean
    lessonPlaneList: LessonPlaneListResponse | null
    teacherList: Array<Admin>
    lessonAssign: LessonAssignPayload | null
}