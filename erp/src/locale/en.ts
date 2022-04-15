const strings = {
  role: {
    addRole: 'New Role',
    addRolePlaceholder: 'Enter a new Role',
    addRoleLabel: 'Want to add a new Role?'
  },
  login: {
    title: 'Login',
    description: 'Sign In to your account',
    submit: 'Submit',
    loginFailed:
      'Login failed. Please check the credentials or try after sometime.',
    invalidLogin: 'Please check the username or password'
  },
  finance: {
    categoryList: 'Group Category List',
    groupList: 'Group List',
    subGroupList: 'Sub Group List',
    bankList: 'Bank List',
    ledgerList: 'Ledger List',
    groupName: 'Group Name',
    billPayments: 'Bill Payments',
    applicationReceipt: 'Application Receipt',
    site: 'Site',
    receiptDate: 'Receipt Date',
    receiptLedger: 'Receipt Ledger',
    receivedGroup: 'Receipt Group',
    receivedAmount: 'Receipt Amount',
    receiptVia: 'Receipt Via(Dr.)',
    depositListLabel: 'Deposit Bank/Cash',
    depositBank: 'Deposit Ledger / Bank',
    cheque: 'Cheque',
    chequeDate: 'Cheque date',
    bank: 'Bank',
    bankCharges: 'Bank Charges',
    depositedBank: 'Bank Chrgs. Deposited Bank',
    narration: 'Narration',
    applicationName: 'Applicant Name',
    addPayment: 'Add Payment',
    godOwnName: 'Godown Name',
    amount: 'Amount',
    totalAmountPaid: 'Total Amount Paid',
    ledgerOrBankName: 'Ledger / Bank Name',
    netAmount: 'Net Amount',
    addContra: 'Add Contra',
    addJournal: 'Add Journal Voucher',
    balanceSheet: 'Balance sheet',
    contra: {
      contraNumber: 'Contra Number',
      debit: 'Debit',
      debitLedger: 'Debit Ledger',
      debitGroup: 'Debit Group',
      debitAmount: 'Debit Amount',
      debitChequeNo: 'Debit Cheque No',
      credit: 'Credit',
      creditLedger: 'Credit Ledger',
      creditGroup: 'Credit Group',
      creditAmount: 'Credit Amount',
      creditChequeNo: 'Credit Cheque No'
    },
    journal: {
      journalVoucher: 'Journal Voucher',
      journalDate: 'Journal Date'
    }
  },
  addReceipt: {
    title: 'Add Receipt',
    voucherNo: 'Voucher No',
    school: 'School'
  },
  fileUpload: {
    dragAndDropText: 'DRAG AND DROP FILE TO UPLOAD',
    upload: 'Upload File',
    docFilesOnly: 'UPLOAD ONLY .DOC FILES',
    imageOnly: 'UPLOAD ONLY .PNG/.JPG FILES'
  },
  stuentConsession: {
    title: 'Student Concession',
    students: 'Students'
  },
  changeStudentFee: {
    title: 'Change/Upgrade Fees',
    allotedFeeMaster: 'Alloted Fee Master'
  },
  validationMessages: {
    userName: {
      required: 'Username is required'
    },
    phone: {
      required: 'Phone number is required',
      numberOnly: 'Please enter only numbers',
      invalid: 'Please enter valid phone number'
    },
    email: {
      required: 'Email is required',
      invalid: 'Please enter valid email'
    },
    password: {
      required: 'Password is required',
      confirmPasswordRequired: 'Confirm Password is required',
      invalid:
        'Password must contain 8 characters, One uppercase, One lowercase, One number and one special case character',
      nonMatch: 'Passwords must match'
    },
    field: {
      required: 'This is a required field'
    },
    date: {
      academicYearInvalid: 'Please enter a valid Academic year to proceed'
    }
  },
  header: {
    logout: 'Logout'
  },
  modal: {
    cancel: 'Cancel',
    submit: 'Submit',
    verify: 'Verify'
  },
  button: {
    back: 'Back',
    save: 'Save',
    search: 'Search',
    saveAndPay: 'Save & Pay',
    addFee: 'Add Fee Description',
    exit: 'Exit',
    add: 'Add',
    remove: 'Remove',
    cancel: 'Cancel',
    print: 'Print'
  },
  chart: {
    stacked: {
      title: 'Income of the Year'
    },
    line: {
      title: 'Expense over a Year',
      yAxis: 'Expense in (Rupees)'
    }
  },
  dashboard: {
    applicationsReceived: 'Applications Received: ',
    applicationsClosed: 'Applications Closed: ',
    applicationsPending: 'Applications Pending: ',
    noOfStudents: 'No of Students',
    totalFeeReceivable: 'Total Fee Receivable',
    totalFeeReceived: 'Total Fee Received',
    balanceFee: 'Balance Fee',
    totalBillsPayable: 'Total Bills Payable',
    totalBillsPaid: 'Total Bills Paid',
    pendingBills: 'Pending Bills',
    bankBalance: 'Bank Balance',
    srm: 'SRM',
    title: 'Admin Dashboard'
  },
  dropdown: {
    user: 'User',
    logout: 'logout'
  },
  table: {
    previous: 'Previous',
    next: 'Next'
  },
  academic: {
    addAcademic: 'Add Academic',
    academicYear: 'Academic Year'
  },
  year: {
    addYear: 'Add Year',
    yearPlaceholder: 'Year'
  },
  fms: {
    feeDescription: {
      feeDescriptionList: 'Fee Description List',
      addFeeDescription: 'Add Fee Description',
      editFeeDesciption: 'Edit Fee Description',
      feeDetails: 'Fee Details',
      selectFeeType: 'Select Fee Type',
      selectFeeDescription: 'Select Fee Description',
      feeType: 'Fee Type',
      feeDescription: 'Fee Description',
      enterFeeDescription: 'Enter Fee Description',
      selectRegistrationType: 'Select Registration Type',
      registrationType: 'Registration Type'
    },
    feeMaster: {
      feeList: 'Fee List',
      addFeeMasterTitle: 'Add Fee Master',
      editFeeMasterTitle: 'Edit Fee Master'
    },
    feeReceipt: {
      receipt: 'Fee Receipt',
      date: 'Date',
      nextDueDate: 'Next Due',
      remarks: 'Remarks',
      enterRemarks: 'Enter Remarks',
      showHistory: 'Show History'
    }
  },
  studentRegistration: {
    registration: 'Applied & Admitted Lists',
    semesterOrClass: 'Course',
    academicYear: 'Academic Year',
    year: 'Year',
    pay: 'Pay',
    addRegistration: 'Add New Registration',
    addRegistrationForm: 'Add Registration Form',
    applicationList: 'Application List',
    onlineApplication: 'Online Applications',
    admittedList: 'Admitted List',
    registrationTab: 'Registration',
    medicalFormTab: 'Medical Form',
    documentsTab: 'Documents',
    emergencyContacts:
      'Emergency Contacts (Other than Parents) - In case of emergency and we cannot reach you, who else can we Contact?',
    howDidYouHear: 'How did you hear about us?',
    transportDetails: 'Transport Details',
    hostelDetails: 'Hostel Details',
    uploadImage: 'Drag and drop a file or Click here',
    contactInformation: 'Contact Information',
    physicianInformation: 'Physician Information',
    healthInsurance: 'Health Insurance',
    medicalInformation:
      'Medical Information - Does your child have any allergies or food restrictions? If yes, please specify',
    studentDocument: `Student's Document`,
    courseInformation: {
      title: `Course Details * Please select the course`,
      admisionTypeLabel: 'Admission Type',
      admissionTypePlaceholder: 'Select Admission Type',
      combinationType: 'Combination',
      combinationTypePlaceholder: 'Select Combination',
      primaryLanguage: 'I - Language',
      secondaryLanguage: 'II - Language',
      languagePlaceholder: 'Select Language'
    },
    childInformation: {
      title: 'Personal Details',
      year: 'Year',
      studentsNameLabel: `Student's Name`,
      studentsNamePlaceholder: 'Enter Student Name',
      fathersNameLabel: `Father's Name`,
      fathersNamePlaceholder: `Enter Father's Name'`,
      mothersNameLabel: `Mother's Name`,
      mothersNamePlaceholder: `Enter Mother's Name'`,
      genderLabel: 'Gender',
      genderPlaceholder: 'Select Gender',
      dobPlaceholder: 'Select Date Of Birth',
      dobLabel: 'Date of Birth',
      bloodGroupPlaceholder: 'Enter Blood Group',
      bloodGroupLabel: 'Blood Group',
      nationalityPlaceholder: 'Select Nationality',
      nationalityLabel: 'Nationality',
      communityPlaceholder: 'Select Community',
      communityLabel: 'Community',
      religionPlaceholder: 'Enter Religion',
      religionLabel: 'Religion',
      castePlaceholder: 'Select Caste',
      casteLabel: 'Caste',
      studentTypeLabel: 'Student Type',
      studentTypePlaceholder: 'Select Student Type',
      physicallyChallengedLabel: 'Is Physically Challenged',
      aadharNumberPlaceHolder: 'Enter Aadhar Number',
      aadharNumberLabel: 'Aadhar Number',
      selectYear: 'Select Year',
      academicYear: 'Academic Year',
      selectUniversity: 'Select University',
      university: 'University',
      selectCourse: 'Select Course',
      course: 'Course',
      selectSyllabus: 'Select Syllabus/Branch',
      syllabus: 'Syllabus/Branch',
      middleNamePlaceholder: 'Middle Name',
      lastNamePlaceholder: 'Last Name',
      selectAdmissionType: 'Select Admission Type',
      admissionTypePlaceholder: 'Admission Type',
      selectTerm: 'Select Term',
      term: 'Term',
      selectName: 'Select Name',
      name: 'Name',
      selectAdmission: 'Select Admission No',
      admissionNo: 'Admission No.',
      fatherName: 'Fathers Name',
      feePayable: 'Fee Payable',
      lastYearBalance: 'Last Year Balance'
    },
    qualifyingExamDetails: {
      title: 'Qualifying Exam Details',
      qualifyingExamLabel: 'Qualifying Exam',
      qualifyingExamPlaceholder: 'Select Qualifying Exam',
      mediumLabel: 'Medium',
      mediumPlaceholder: 'Select Medium',
      previousExamLabel: 'Previous Exam registration No',
      previousExamPlaceholder: 'Enter Previous Exam registration No',
      satsNoLabel: 'SATS No',
      satsPlaceholder: 'Enter SATS No',
      boardLabel: 'Board',
      boardPlaceholder: 'Select Board',
      schoolLabel: 'School/ College Last Attended',
      schoolPlaceholder: 'Enter School/ College Last Attended',
      yearOfPassingLabel: 'Year Of Passing',
      yearOfPassingPlaceholder: 'Enter Year of Passing',
      obtainMarksLabel: 'Obtain Marks',
      obtainMarksPlaceholder: 'Enter Obtain Marks',
      percentagelabel: 'Percentage',
      percentagePlaceholder: 'Enter Percentage'
    },
    communicationDetails: {
      title: 'Communiction Details',
      permanentDetails: 'Permanent Details',
      permanentAddressSameAsCommunication:
        'Is permanent address same as communication address',
      addressLabel: 'Address for Communication',
      addressPlaceholder: 'Enter Address',
      mobileNumberLabel: 'Mobile Number',
      mobileNumberPlaceholder: 'Enter Mobile Number',
      parentMobileNumberLabel: 'Parent Mobile Number',
      parentMobileNumberPlaceholder: 'Enter Parent Mobile Number',
      emailLabel: 'Email Label',
      emailPlaceholder: 'Enter email Id',
      stateLabel: 'State',
      statePlaceholder: 'Select State',
      districtLabel: 'District',
      districtPlaceholder: 'Enter District',
      talukLabel: 'Taluk',
      talukPlaceholder: 'Enter Taluk',
      cityLabel: 'City/Town/Suburban',
      cityPlaceholder: 'Enter City/Town/Suburban',
      countryLabel: 'Country',
      countryPlaceholder: 'Enter Country',
      postalLabel: 'Postal/Zipcode',
      postalPlaceholder: 'Enter Postal/Zipcode'
    }
  },
  hrms: {
    leaveMaster: {
      title: 'Leave Master',
      encassual: 'Encassable ',
      encassualDetails: 'Encassable Details',
      leaveName: 'Leave Name',
      leaveDescription: 'Leave Description',
      description: 'Description'
    }
  }
}

export default strings
