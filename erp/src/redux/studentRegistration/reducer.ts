import { InitialState, OnChangeHandler, registration } from './typings'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { studentRegistration } from './api'

const initialState: InitialState = {
  isLoading: false,
  studentRegistration: {
    studentsName: '',
    fathersName: '',
    mothersName: '',
    dateOfBirth: new Date().toDateString(),
    gender: '',
    bloodGroup: '',
    physicallyChallenged: '',
    studentType: '',
    aadharNumber: '',
    nationality: '',
    religion: '',
    caste: '',
    community: '',
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
    addressPermenent: '',
    emailPermenent: '',
    mobileNumberPermenent: '',
    parentMobileNumberPermenent: '',
    statePermenent: '',
    districtPermenent: '',
    talukPermenent: '',
    cityPermenent: '',
    countryPermenent: '',
    postalPermenent: '',

    isSameAsCommunicationAddress: false,
    qualifyingExam: '',
    medium: '',
    previousExamRegNo: '',
    satsNo: '',
    board: '',
    school: '',
    yearOfPassing: '',
    obtainedMarks: '',
    percentage: '',
    academicYear: '',
    admissionTypeList: '',
    semester: '',
    primaryLanguage: '',
    secondaryLanguage: '',
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
        ...state.studentRegistration,
        [key]: action.payload[key]
      }
      state.studentRegistration = courseInfo
    },
    updateChildInformation: (state, action: PayloadAction<OnChangeHandler>) => {
      const key = Object.keys(action.payload)[0]
      const childInfo = {
        ...state.studentRegistration,
        [key]: action.payload[key]
      }
      state.studentRegistration = childInfo
    },
    updateCommunicationDetails: (
      state,
      action: PayloadAction<OnChangeHandler>
    ) => {
      const key = Object.keys(action.payload)[0]
      const communicationInfo = {
        ...state.studentRegistration,
        [key]: action.payload[key]
      }
      state.studentRegistration = communicationInfo
    },
    updatePermanentDetails: (state, action: PayloadAction<OnChangeHandler>) => {
      const key = Object.keys(action.payload)[0]
      const communicationInfo = {
        ...state.studentRegistration,
        [key]: action.payload[key]
      }
      state.studentRegistration = communicationInfo
    },
    updateQualifyingExamDetails: (
      state,
      action: PayloadAction<OnChangeHandler>
    ) => {
      const key = Object.keys(action.payload)[0]
      const qualifyingExamInfo = {
        ...state.studentRegistration,
        [key]: action.payload[key]
      }
      state.studentRegistration = qualifyingExamInfo
    }
  },
  extraReducers: {
    [studentRegistration.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [studentRegistration.fulfilled.toString()]: (state, action: PayloadAction<registration>) => {
      state.isLoading = false
      state.studentRegistration = action?.payload
    },
    [studentRegistration.rejected.toString()]: (state) => {
      state.isLoading = false;
    },
  }
})

export default studentRegistrationSlice.reducer
