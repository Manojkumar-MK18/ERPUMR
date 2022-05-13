export interface DaybookResponse {
    from: string
    toDate: string
    type: string
}

export interface InitialState {
    error: string
    isLoading: boolean
    dayBookReportList: Array<any>
}