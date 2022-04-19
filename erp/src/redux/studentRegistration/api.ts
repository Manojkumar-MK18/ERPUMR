import { createAsyncThunk } from '@reduxjs/toolkit'
import apiEndpoints from 'const/apiEndpoints'
import { RootState } from 'redux/store'
import api from 'services'
import strings from 'locale/en'

const addNewStudent = createAsyncThunk(
  'studentRegistration/new',
  async (_undefined, { getState, rejectWithValue }): Promise<any> => {
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
          password,
          admissionType,
          primaryLanguage,
          secondaryLanguage,
          caste,
          community,
          bloodGroup,
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
      password
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
        bloodGroup,
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
        enrollmentNumber: enrollmentNumber,
        email,
        dob: dateOfBirth,
        country: country,
        coachingCenterId: instituteId,
        branchIds: [branchId],
        batchIds: [batchId]
      }
      const response = await api.post(
        apiEndpoints.studentRegistration,
        requestPayload
      )
      return response?.data
    } else {
      return rejectWithValue(strings?.validationMessages?.studentRegistration)
    }
  }
)

export default addNewStudent
