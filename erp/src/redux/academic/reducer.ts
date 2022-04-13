import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AcademicState, Course, DropdownList } from './typings'
import {
  semesterList,
  academicYearList,
  yearList,
  universityList,
  syllabusList,
  levelList,
  genderList,
  nationalityList,
  categoryList,
  admissionTypeList,
  casteList,
  feeTypeList,
  termList,
  combinationList,
  primaryLanguageList,
  secondaryLanguageList,
  religionList,
  bloodGroupList,
  studentTypeList,
  boardList,
  stateList,
  registrationTypeList,
  mediumType,
  qualificationDetailsD
} from './const'
import getCourses from './api' 

const initialState: AcademicState = {
  semester: semesterList,
  academicYear: academicYearList,
  year: yearList,
  university: universityList,
  courseList: [],
  syllabusList,
  levelList,
  genderList,
  nationalityList,
  categoryList,
  admissionTypeList,
  casteList,
  feeTypeList,
  termList,
  combinationList,
  primaryLanguageList,
  secondaryLanguageList,
  religionList,
  bloodGroupList,
  studentTypeList,
  boardList,
  stateList,
  mediumType,
  qualificationDetailsD,
  registrationTypeList: registrationTypeList,
  courses: [],
}

export const academicSlice = createSlice({
  name: 'academic',
  initialState,
  reducers: {
    updateSemester: (state, action: PayloadAction<DropdownList>) => {
      state.semester = action.payload
    },
    updateAcademicYear: (state, action: PayloadAction<DropdownList>) => {
      state.academicYear = action.payload
    },
    updateYear: (state, action: PayloadAction<DropdownList>) => {
      state.year = action.payload
    }
  },
  extraReducers: {
    [getCourses.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<Course>>
    ) => {
      state.courses = action.payload
    }
  }
})

export default academicSlice.reducer
