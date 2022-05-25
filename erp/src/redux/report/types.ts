export interface DaybookResponse {
    from: string
    toDate: string
    type: string
}

export interface User {
    aadhar: string
    academicYear: string
    address: string
    address1: string
    address2: string
    admissionNumber: string
    admissionType: string
    batchIds: string
    batchList: string
    bloodGroup: string
    board: string
    branchIds: string
    branchList: string
    bulk: string
    caste: string
    challenged: string
    city: string
    classId: string
    coachingCenterId: string
    combination: string
    community: string
    country: string
    createdAt: string
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
    percentage: string
    profileImagePath: string
    qualification: string
    qualifyingExam: string
    regNo: string
    religion: string
    salutation: string
    shortDiscription: string
    statNo: string
    state: string
    status: string
    studentAccess: string
    studentName: string
    studentTpe: string
    subject: string
    taluk: string
    updatedAt: string
    updatedBy: string
    uploadFileId: string
    userId: string
    userType: string
    yearOfExperience: string
    yearOfPassing: string
    zipCode: string
}

export interface daybook {
    amount: string
    balance: string
    bankName: string
    cashier: string
    createdAt: string
    createdBy: string
    date: string
    description: string
    id: string
    modeOfPayment: string
    paid: string
    paidTypes: string
    receiptId: string
    referenceId: string
    status: string
    studentId: string
    updatedAt: string
    updatedBy: string
    userDetail: any
}

export interface InitialState {
    error: string
    isLoading: boolean
    dayBookReportList: Array<any>
}