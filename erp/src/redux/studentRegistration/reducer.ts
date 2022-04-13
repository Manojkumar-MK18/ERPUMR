import StudentRegistration, {  InitialState, OnChangeHandler } from './typings'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { studentRegistration } from './api'

const initialState: InitialState = {
  isLoading: false,
  studentRegistration: {
    childInformation: {
      studentsName: '',
      fathersName: '',
      mothersName: '',
      dateOfBirth: new Date().toDateString(),
      gender: '',
      bloodGroup: '',
      physicallyChallenged: false,
      studentType: '',
      aadharNumber: '',
      nationality: '',
      religion: '',
      caste: '',
      community: ''
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
      percentage: ''
    },
    courseDetails: {
      academicYear: '',
      admissionTypeList: '',
      semester: '',
      primaryLanguage: '',
      secondaryLanguage: '',
    }
  }
}

export const studentRegistrationSlice = createSlice({
  name: 'studentRegistrationSlice',
  initialState,
  reducers: {
    updateCourseInformation: (
      state,
      action: PayloadAction<OnChangeHandler>
    ) => {
      const key = Object.keys(action.payload)[0]
      const courseInfo = {
        ...state.studentRegistration.courseDetails,
        [key]: action.payload[key]
      }
      state.studentRegistration.courseDetails = courseInfo
    },
    updateChildInformation: (state, action: PayloadAction<OnChangeHandler>) => {
      const key = Object.keys(action.payload)[0]
      const childInfo = {
        ...state.studentRegistration.childInformation,
        [key]: action.payload[key]
      }
      state.studentRegistration.childInformation = childInfo
    },
    updateCommunicationDetails: (
      state,
      action: PayloadAction<OnChangeHandler>
    ) => {
      const key = Object.keys(action.payload)[0]
      const communicationInfo = {
        ...state.studentRegistration.communicationDetails,
        [key]: action.payload[key]
      }
      state.studentRegistration.communicationDetails = communicationInfo
    },
    updatePermanentDetails: (state, action: PayloadAction<OnChangeHandler>) => {
      const key = Object.keys(action.payload)[0]
      const communicationInfo = {
        ...state.studentRegistration.permanentDetails,
        [key]: action.payload[key]
      }
      state.studentRegistration.permanentDetails = communicationInfo
    },
    updateQualifyingExamDetails: (
      state,
      action: PayloadAction<OnChangeHandler>
    ) => {
      const key = Object.keys(action.payload)[0]
      const qualifyingExamInfo = {
        ...state.studentRegistration.qualifyingExamDetails,
        [key]: action.payload[key]
      }
      state.studentRegistration.qualifyingExamDetails = qualifyingExamInfo
    }
  },
  extraReducers: {
    [studentRegistration.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [studentRegistration.fulfilled.toString()]: (state, action: PayloadAction<StudentRegistration>) => {
      state.isLoading = false
      state.studentRegistration = action?.payload
    },
    [studentRegistration.rejected.toString()]: (state) => {
      state.isLoading = false;
    },
  }
})

export default studentRegistrationSlice.reducer
