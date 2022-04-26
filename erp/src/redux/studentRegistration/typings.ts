export type OnChangeHandler = {
  [key: string]: string | boolean
}

export interface ChildInformation {
  academicYear: string
  studentsName: string
  fathersName: string
  mothersName: string
  dateOfBirth: string
  gender: string
  physicallyChallenged: string
  studentType: string
  aadharNumber: string
  nationality: string
  religion: string
  caste: string
  community: string
  instituteId: string
  courseId: string
  branchId: string
  batchId: string
  admissionType: string
  primaryLanguage: string
  secondaryLanguage: string
  profileImage: any
  enrollmentNumber: string
  userName: string
  passwordUpdated: string
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
  status: string
}

export interface getFeeMasterByTerm {
  term: string
  title: string
  year: string
  academicYear: string
  courseId: string
  regType: string
}

export interface FeesAdd {
  id: string
  studentId: string
  paid: string
  amount: string
  referenceId: any
  modeOfPayment: string
  description: string
  paidTypes: string
}

export interface updateStudentIdForFees {
  studentId: any
}

interface StudentRegistration {
  childInformation: ChildInformation
  communicationDetails: CommunicationDetails
  permanentDetails: PermanentDetails
  qualifyingExamDetails: QualifyingDetails
  error: string
  isLoading: boolean
  getFeeByTerm: Array<getFeeMasterByTerm>
  addFee: FeesAdd
  selectStudentId: updateStudentIdForFees
}

export default StudentRegistration
