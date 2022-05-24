import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  AcademicState,
  Batch,
  Branch,
  Course,
  DropdownList,
  GetAdminResponse,
  GetChildCoursesResponse,
  Institute
} from './typings'
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
  mediumList,
  qualififactionList,
  paymentModes,
  status
} from './const'
import getCourses, {
  getInstitutes,
  getBranchesByInstitute,
  getAllCoursesByInstitute,
  getBatchesForCourse,
  getChildCourses,
  getBranches,
  getAdminList
} from './api'
import getCoursesDropdown from './helpers'

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
  registrationTypeList: registrationTypeList,
  instituteList: [],
  branchList: [],
  batchList: [],
  mediumList: mediumList,
  qualififactionList: qualififactionList,
  paymentModes: paymentModes,
  subjects: [],
  chapters: [],
  topics: [],
  subjectlist: [],
  chapterList: [],
  topicList: [],
  statuslist: status,
  admin: null
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
      state.courseList = getCoursesDropdown(action.payload)
    },
    [getInstitutes.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<Institute>>
    ) => {
      state.instituteList = action.payload
    },
    [getBranchesByInstitute.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<Branch>>
    ) => {
      state.branchList = action.payload
    },
    [getBranches.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<Branch>>
    ) => {
      state.branchList = action.payload
    },
    [getAllCoursesByInstitute.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<Course>>
    ) => {
      state.courseList = getCoursesDropdown(action.payload)
    },
    [getBatchesForCourse.fulfilled.toString()]: (
      state,
      action: PayloadAction<Array<Batch>>
    ) => {
      state.batchList = action.payload
    },
    [getChildCourses.fulfilled.toString()]: (
      state,
      action: PayloadAction<GetChildCoursesResponse>
    ) => {
      const { response, type } = action?.payload
      switch (type) {
        case 'SUBJECT':
          state.subjects = response
          state.subjectlist = getCoursesDropdown(response)
          break
        case 'CHAPTER':
          state.chapters = response
          state.chapterList = getCoursesDropdown(response)
          break
        default:
          state.topics = response
          state.topicList = getCoursesDropdown(response)
          break
      }
    },
    [getAdminList.fulfilled.toString()]: (
      state,
      action: PayloadAction<GetAdminResponse>
    ) => {
      state.admin = action.payload
    }
  }
})

export default academicSlice.reducer
