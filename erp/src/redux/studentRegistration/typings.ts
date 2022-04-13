export type OnChangeHandler = {
  [key: string]: string | boolean
}

export interface CourseDetails {
  academicYear: string
  admissionTypeList: string
  semester: string 
  primaryLanguage: string
  secondaryLanguage: string
}

export interface ChildInformation {
  studentsName: string
  fathersName: string
  mothersName: string
  dateOfBirth: string
  gender: string
  bloodGroup: string
  physicallyChallenged: boolean
  studentType: string
  aadharNumber: string
  nationality: string
  religion: string
  caste: string
  community: string
}

export interface CommunicationDetails {
  address: string
  email: string
  mobileNumber: string
  parentMobileNumber: string
  state: string
  district: string
  taluk: string
  city: string
  country: string
  postal: string
}

export interface PermanentDetails {
  address: string
  email: string
  mobileNumber: string
  parentMobileNumber: string
  state: string
  district: string
  taluk: string
  city: string
  country: string
  postal: string
  isSameAsCommunicationAddress: boolean
}

export interface QualifyingDetails {
  qualifyingExam: string
  medium: string
  previousExamRegNo: string
  satsNo: string
  board: string
  school: string
  yearOfPassing: string
  obtainedMarks: string
  percentage: string
}

interface StudentRegistration { 
  courseDetails: CourseDetails
  childInformation: ChildInformation
  communicationDetails: CommunicationDetails
  permanentDetails: PermanentDetails
  qualifyingExamDetails: QualifyingDetails
}

export default StudentRegistration

export interface InitialState { 
  isLoading: boolean
  studentRegistration: StudentRegistration
}