const apiEndpoints = {
  auth: 'auth',
  getFeeDescription: 'feeMaster/all',
  addFeeDescription: 'feeMaster/add',
  editFeeDescription: 'feeTypes/edit',
  getFeeMaster: 'feeTypes/all',
  addFeeMaster: 'feeTypes/add',
  getCourses: 'course/getCourses',
  deleteFeeMaster: 'feeMaster/delete',
  editFeeMaster: 'feeTypes/edit',
  register: 'userDetail/save',
  addLeave: 'leave/createLeaveMaster',
  studentRegistration: 'userDetail/save',
  applyLeave: '/leave/applyLeave',
  getBatchesForCourse: 'batch/batchesByCourse',
  getBranchesForCourse: 'coachingCentreBranch/branchesForCourse',
  getAllCoursesByInstitute: 'course/allCoursesByCoaching',
  getInstitutes: 'coachingCentre',
  getstudents: 'userDetail/getAll',
  addDesignation: 'staff/newdesignation',
  staffRegistration: 'staff/newstaff',
  getLeave: 'leave/getLeaveStatus',
  getFeeMasterByTerm: 'feeTypes/getMasterFees',
  addfees:'feesPaid/add'
}

export default apiEndpoints
