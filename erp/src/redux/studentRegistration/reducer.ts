import StudentRegistration, { FeesAdd, getFeeMasterByTerm, OnChangeHandler, updateStudentIdForFees } from './typings'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addNewStudent, fessPaid, getFeeMasterByTermApi } from './api'
import strings from 'locale/en'

const initialState: StudentRegistration = {
  childInformation: {
    studentsName: '',
    fathersName: '',
    mothersName: '',
    dateOfBirth: '',
    gender: '',
    physicallyChallenged: 'no',
    studentType: '',
    aadharNumber: '',
    nationality: '',
    religion: '',
    caste: '',
    community: '',
    instituteId: '',
    courseId: '',
    branchId: '',
    batchId: '',
    primaryLanguage: '',
    secondaryLanguage: '',
    admissionType: '',
    profileImage: null,
    enrollmentNumber: '',
    academicYear: '',
    userName: '',
    passwordUpdated: ''
  },
  communicationDetails: {
    address: '',
    email: '',
    mobileNumber: '',
    parentMobileNumber: '',
    state: '',
    district: '',
    taluk: '',
    city: '',
    country: '',
    postal: ''
  },
  permanentDetails: {
    address: '',
    email: '',
    mobileNumber: '',
    parentMobileNumber: '',
    state: '',
    district: '',
    taluk: '',
    city: '',
    country: '',
    postal: '',
    isSameAsCommunicationAddress: false
  },
  qualifyingExamDetails: {
    qualifyingExam: '',
    medium: '',
    previousExamRegNo: '',
    satsNo: '',
    board: '',
    school: '',
    yearOfPassing: '',
    obtainedMarks: '',
    percentage: '',
    status: ''
  },
  error: '',
  isLoading: false,
  getFeeByTerm: [],
  addFee: {
    paid: '',
    paidTypes: '',
    referenceId: '',
    id: '',
    description: '',
    studentId: '',
    amount: '',
    modeOfPayment: ''
  },
  selectStudentId: {
    studentId: ''
  }
}

export const studentRegistrationSlice = createSlice({
  name: 'studentRegistrationSlice',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = ''
    },
    updateChildInformation: (state, action: PayloadAction<OnChangeHandler>) => {
      const key = Object.keys(action.payload)[0]
      const childInfo = {
        ...state.childInformation,
        [key]: action.payload[key]
      }
      state.childInformation = childInfo
    },
    updateCommunicationDetails: (
      state,
      action: PayloadAction<OnChangeHandler>
    ) => {
      const key = Object.keys(action.payload)[0]
      const communicationInfo = {
        ...state.communicationDetails,
        [key]: action.payload[key]
      }
      state.communicationDetails = communicationInfo
    },
    updatePermanentDetails: (state, action: PayloadAction<OnChangeHandler>) => {
      const key = Object.keys(action.payload)[0]
      const communicationInfo = {
        ...state.permanentDetails,
        [key]: action.payload[key]
      }
      state.permanentDetails = communicationInfo
    },
    updateQualifyingExamDetails: (
      state,
      action: PayloadAction<OnChangeHandler>
    ) => {
      const key = Object.keys(action.payload)[0]
      const qualifyingExamInfo = {
        ...state.qualifyingExamDetails,
        [key]: action.payload[key]
      }
      state.qualifyingExamDetails = qualifyingExamInfo
    },
    updateSelectedStudentId: (state, action: PayloadAction<updateStudentIdForFees>) => {
      state.selectStudentId = action?.payload
    },
  },
  extraReducers: {
    [addNewStudent.pending.toString()]: (state) => {
      state.isLoading = true
    },
    [addNewStudent.fulfilled.toString()]: (state) => {
      state.isLoading = false
    },
    [addNewStudent.rejected.toString()]: (state, action) => {
      state.isLoading = false
      state.error =
        action.payload || strings.studentRegistration.saveStudentsError
      window.scrollTo({ top: 0 })
    },
    [getFeeMasterByTermApi.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<getFeeMasterByTerm>>
    ) => {
      state.isLoading = false
      state.getFeeByTerm = action.payload
    },
    [fessPaid.fulfilled.toString()]: (
      state,
      action: PayloadAction<FeesAdd>
    ) => {
      state.isLoading = false
      state.addFee = action.payload
    },
  }
})

export default studentRegistrationSlice.reducer
