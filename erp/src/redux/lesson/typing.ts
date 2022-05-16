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

export interface InitialState {
    isLoading: boolean
    lessonPlaneList: LessonPlaneListResponse | null
}