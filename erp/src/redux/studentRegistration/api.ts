import { createAsyncThunk } from '@reduxjs/toolkit'
import apiEndpoints from 'const/apiEndpoints'
import { RootState } from 'redux/store'
import api from 'services'
import { getRoleId } from 'helpers'
import { AdminType } from 'const'
import history from 'const/history'
import { FeesAdd } from './typings'
import strings from 'locale/en'

const addNewStudent = createAsyncThunk(
  'studentRegistration/new',
  async (_undefined, { getState,rejectWithValue }): Promise<any> => {
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
        userType: AdminType.STUDENT,
        enrollmentNumber: enrollmentNumber,
        email,
        dob: dateOfBirth,
        country: country,
        coachingCenterId: instituteId,
        branchIds: [branchId],
        batchIds: [batchId],
        userName,
        passwordUpdated: passwordUpdated,
        roleId: getRoleId(AdminType.STUDENT),
        status: 'ACTIVE'
      }
      const response = await api.post(
        apiEndpoints.studentRegistration,
        requestPayload
      )

      if (response) {
        history.goBack()
      } else {
        return rejectWithValue(strings?.validationMessages?.studentRegistration)
      }

      return response?.data
    }
  }
)

export default addNewStudent

export const getFeeMasterByTermApi = createAsyncThunk(
  'feeMaster/getFeeMaster',
  async (term: string): Promise<any> => {
    const response = await api.get(
      `${apiEndpoints.getFeeMasterByTerm}?groupBy=${term}`
    )
    return response
  }
)

export const fessPaid = createAsyncThunk(
  'fees/addFees',
  async (requestPayload: FeesAdd): Promise<FeesAdd> => {
    const response = await api.put(
      `${apiEndpoints.addfees}`, requestPayload
    )
    return response?.data
  }
)