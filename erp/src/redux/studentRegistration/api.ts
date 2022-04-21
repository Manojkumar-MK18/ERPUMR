import { createAsyncThunk } from '@reduxjs/toolkit'
import apiEndpoints from 'const/apiEndpoints'
import strings from 'locale/en'
import { getStudentAdmissionList } from 'redux/fms/api'
import { RootState } from 'redux/store'
import api from 'services'

const addNewStudent = createAsyncThunk(
  'studentRegistration/new',
  async (_undefined, { getState,rejectWithValue ,dispatch}): Promise<any> => {
    const {
      studentRegistration: {
        childInformation: {
          academicYear,
          instituteId,
          branchId,
          courseId,
          batchId,
          studentsName,
          fathersName,
          mothersName,
          gender,
          dateOfBirth,
          nationality,
          religion,
          aadharNumber,
          userName,
          passwordUpdated,
          admissionType,
          primaryLanguage,
          secondaryLanguage,
          caste,
          community, 
          physicallyChallenged,
          studentType,
          enrollmentNumber
        },
        communicationDetails: {
          address,
          parentMobileNumber,
          mobileNumber,
          email,
          state,
          district,
          taluk,
          city,
          country,
          postal
        },
        qualifyingExamDetails: {
          medium,
          previousExamRegNo,
          satsNo,
          board,
          percentage,
          yearOfPassing,
          school,
          obtainedMarks
        }
      }
    } = getState() as RootState

    if (
      academicYear &&
      instituteId &&
      branchId &&
      courseId &&
      batchId &&
      studentsName &&
      fathersName &&
      mothersName &&
      gender &&
      dateOfBirth &&
      nationality &&
      religion &&
      aadharNumber &&
      address &&
      parentMobileNumber &&
      mobileNumber &&
      email &&
      state &&
      district &&
      taluk &&
      city &&
      country &&
      postal &&
      userName &&
      passwordUpdated
    ) {
      const requestPayload = {
        courseId: courseId,
        admissionType,
        lang1: primaryLanguage || '',
        lang2: secondaryLanguage || '',
        studentName: studentsName,
        aadhar: aadharNumber || '',
        caste: caste || '',
        religion: religion,
        community,
        nationality,
        gender, 
        challenged: physicallyChallenged === 'yes',
        studentTpe: studentType,
        address,
        parentNumber: parentMobileNumber,
        district,
        taluk,
        city,
        state,
        zipCode: postal,
        medium,
        regNo: previousExamRegNo,
        statNo: satsNo,
        board,
        lastAttended: school,
        yearOfPassing: yearOfPassing,
        markObtained: obtainedMarks,
        percentage: percentage,
        userType: 'STUDENT',
        roleId: '04476e15-dfae-4068-8beb-e5bce310ee3e',
        enrollmentNumber: enrollmentNumber,
        email,
        dob: dateOfBirth,
        country: country,
        coachingCenterId: instituteId,
        branchIds: [branchId],
        batchIds: [batchId],
        userName: userName,
        passwordUpdated: passwordUpdated
      }
      const response = await api.post(
        apiEndpoints.studentRegistration,
        requestPayload
      )
      dispatch(getStudentAdmissionList(1))
      return response?.data.message
    } else {
      return rejectWithValue(strings?.validationMessages?.studentRegistration)
    }
  }
)

export default addNewStudent
