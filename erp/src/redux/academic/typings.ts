import { Dropdown } from '../typings'

export type DropdownList = Array<Dropdown>

export interface Course {
  id: string
  courseName: string
  coachingCentreId: string
  parentId: string
  parentName: string
  status: string
  description: string
}

export interface AcademicState {
  semester: DropdownList
  academicYear: DropdownList
  year: DropdownList
  university: DropdownList
  courseList: DropdownList
  syllabusList: DropdownList
  levelList: DropdownList
  genderList: DropdownList
  nationalityList: DropdownList
  categoryList: DropdownList
  admissionTypeList: DropdownList
  casteList: DropdownList
  feeTypeList: DropdownList
  termList: DropdownList
  combinationList: DropdownList
  primaryLanguageList: DropdownList
  secondaryLanguageList: DropdownList
  religionList: DropdownList
  bloodGroupList: DropdownList
  studentTypeList: DropdownList
  boardList: DropdownList
  stateList: DropdownList
  registrationTypeList: DropdownList
  mediumType:DropdownList
  qualificationDetailsD:DropdownList
  courses: Array<Course>
}