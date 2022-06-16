/* eslint-disable no-unused-vars */
import { ReactElement, useState } from 'react'
import {
  PageWrapper,
  PhotoUploader,
  EditableDropdown,
  DropdownWrapper,
  Input
} from 'components'
import { InfoWrapper, FlexWrapper } from '../subcomponents'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import { updateChildInformation } from 'redux/studentRegistration/actions'
import strings from 'locale/en'
import { checkBoxDropdownList } from 'const'
import { validateAadhar, validateDateOfBirth } from 'helpers/formValidation'
import DatePicker from 'react-datepicker'
import { format } from 'date-fns'
import { DATE_FORMAT_YYYYMMDD } from '../../../const/dateFormat'

const ChildInformation = (): ReactElement => {
  const {
    academic: {
      genderList,
      nationalityList,
      categoryList,
      casteList,
      religionList,
      studentTypeList
    },
    childInformation: {
      studentsName,
      fathersName,
      mothersName,
      dateOfBirth,
      aadharNumber,
      enrollmentNumber,
      userName,
      passwordUpdated
    }
  } = useSelector(
    (state: RootState) => ({
      academic: state.acamedic,
      childInformation: state.studentRegistration.childInformation
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const [dobError, setDobError] = useState('')
  const [aadhaarError, setaadhaarError] = useState('')

  const {
    studentRegistration: {
      childInformation: {
        studentsNameLabel,
        studentsNamePlaceholder,
        fathersNameLabel,
        fathersNamePlaceholder,
        mothersNameLabel,
        mothersNamePlaceholder,
        enterDob,
        genderLabel,
        genderPlaceholder,
        dobLabel,
        nationalityLabel,
        nationalityPlaceholder,
        communityPlaceholder,
        communityLabel,
        religionPlaceholder,
        religionLabel,
        castePlaceholder,
        casteLabel,
        studentTypePlaceholder,
        studentTypeLabel,
        physicallyChallengedLabel,
        aadharNumberPlaceHolder,
        aadharNumberLabel,
        enterEnrollment,
        enrollmentNumberLabel,
        userNameLabel,
        userNamePlaceholder,
        passwordLabel,
        passwordPlaceHolder
      }
    }
  } = strings

  return (
    <PageWrapper>
      <InfoWrapper>
        <PhotoUploader
          handleUpload={(image) => {
            dispatch(updateChildInformation({ profileImage: image }))
          }}
        />
        <FlexWrapper width="100%">
          <DropdownWrapper>
            <Input
              label={studentsNameLabel}
              isRequired
              placeholder={studentsNamePlaceholder}
              value={studentsName}
              onBlur={() => { }}
              error={''}
              width="100%"
              onChange={(value: string) => {
                dispatch(updateChildInformation({ studentsName: value }))
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={fathersNameLabel}
              isRequired
              placeholder={fathersNamePlaceholder}
              value={fathersName}
              onBlur={() => { }}
              error={''}
              width="100%"
              onChange={(value: string) => {
                dispatch(updateChildInformation({ fathersName: value }))
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={mothersNameLabel}
              isRequired
              placeholder={mothersNamePlaceholder}
              value={mothersName}
              onBlur={() => { }}
              error={''}
              width="100%"
              onChange={(value: string) => {
                dispatch(updateChildInformation({ mothersName: value }))
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={genderList}
              title={genderLabel}
              isRequired
              placeholder={genderPlaceholder}
              onBlur={() => { }}
              error={''}
              handleSelect={(item) =>
                dispatch(updateChildInformation({ gender: item.name }))
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <DatePicker
              showMonthDropdown
              showYearDropdown 
              dropdownMode="select"
              selected={dateOfBirth ? new Date(dateOfBirth) : new Date()}
              onSelect={(date: Date) =>
                dispatch(updateChildInformation({ dateOfBirth: date ? format(date, DATE_FORMAT_YYYYMMDD) : '' }))
              }
              onChange={(date: Date) => {
                dispatch(updateChildInformation({ dateOfBirth: date ? format(date, DATE_FORMAT_YYYYMMDD) : '' }))
              }
              }
              placeholderText={enterDob}
              customInput={
                <Input
                  value={dateOfBirth}
                  label={dobLabel}
                  placeholder={enterDob}
                  height="50px"
                  suffix={['far', 'calendar']}
                  onChange={(value: string) => {
                    dispatch(updateChildInformation({ dateOfBirth: value }))
                  }}
                />
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={studentTypeList}
              title={studentTypeLabel}
              placeholder={studentTypePlaceholder}
              onBlur={() => { }}
              error={''}
              handleSelect={(item) =>
                dispatch(updateChildInformation({ studentType: item.name }))
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={checkBoxDropdownList}
              title={physicallyChallengedLabel}
              placeholder={'Select'}
              onBlur={() => { }}
              error={''}
              handleSelect={(item) =>
                dispatch(
                  updateChildInformation({ physicallyChallenged: item.name })
                )
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={aadharNumberLabel}
              placeholder={aadharNumberPlaceHolder}
              value={aadharNumber}
              onBlur={() => {
                const error = validateAadhar(aadharNumber)
                setaadhaarError(error)
              }}
              error={aadhaarError}
              isRequired
              width="100%"
              onChange={(value: string) => {
                dispatch(updateChildInformation({ aadharNumber: value }))
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={religionList}
              title={religionLabel}
              isRequired
              placeholder={religionPlaceholder}
              onBlur={() => { }}
              error={''}
              handleSelect={(item) =>
                dispatch(updateChildInformation({ religion: item.name }))
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={categoryList}
              title={communityLabel}
              placeholder={communityPlaceholder}
              onBlur={() => { }}
              error={''}
              handleSelect={(item) =>
                dispatch(updateChildInformation({ community: item.name }))
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={casteList}
              title={casteLabel}
              placeholder={castePlaceholder}
              onBlur={() => { }}
              error={''}
              handleSelect={(item) =>
                dispatch(updateChildInformation({ caste: item.name }))
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={nationalityList}
              title={nationalityLabel}
              isRequired
              placeholder={nationalityPlaceholder}
              onBlur={() => { }}
              error={''}
              handleSelect={(item) =>
                dispatch(updateChildInformation({ nationality: item.name }))
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={enrollmentNumberLabel}
              placeholder={enterEnrollment}
              value={enrollmentNumber}
              onBlur={() => { }}
              isRequired
              error={''}
              width="100%"
              onChange={(value: string) => {
                dispatch(updateChildInformation({ enrollmentNumber: value }))
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={userNameLabel}
              placeholder={userNamePlaceholder}
              value={userName}
              onBlur={() => { }} 
              error={''}
              width="100%"
              onChange={(value: string) => {
                dispatch(updateChildInformation({ userName: value }))
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={passwordLabel}
              placeholder={passwordPlaceHolder}
              value={passwordUpdated}
              onBlur={() => { }} 
              error={''}
              width="100%"
              onChange={(value: string) => {
                dispatch(updateChildInformation({ passwordUpdated: value }))
              }}
              height="50px"
            />
          </DropdownWrapper>
        </FlexWrapper>
      </InfoWrapper>
    </PageWrapper>
  )
}

export default ChildInformation
