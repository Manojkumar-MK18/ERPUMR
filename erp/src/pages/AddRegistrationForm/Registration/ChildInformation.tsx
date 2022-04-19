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
import { validateDateOfBirth } from 'helpers/formValidation'

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
      bloodGroup,
      enrollmentNumber,
      userName,
      password
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
        bloodGroupLabel,
        bloodGroupPlaceholder,
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
              onBlur={() => {}}
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
              onBlur={() => {}}
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
              onBlur={() => {}}
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
              onBlur={() => {}}
              error={''}
              handleSelect={(item) =>
                dispatch(updateChildInformation({ gender: item.name }))
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={dobLabel}
              placeholder={enterDob}
              value={dateOfBirth}
              onBlur={() => {
                const error = validateDateOfBirth(dateOfBirth)
                setDobError(error)
              }}
              error={dobError}
              isRequired
              width="100%"
              onChange={(value: string) => {
                dispatch(updateChildInformation({ dateOfBirth: value }))
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={studentTypeList}
              title={studentTypeLabel}
              placeholder={studentTypePlaceholder}
              onBlur={() => {}}
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
              onBlur={() => {}}
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
              onBlur={() => {}}
              error={''}
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
              dropdownList={casteList}
              title={casteLabel}
              placeholder={castePlaceholder}
              onBlur={() => {}}
              error={''}
              handleSelect={(item) =>
                dispatch(updateChildInformation({ caste: item.name }))
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={religionList}
              title={religionLabel}
              isRequired
              placeholder={religionPlaceholder}
              onBlur={() => {}}
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
              onBlur={() => {}}
              error={''}
              handleSelect={(item) =>
                dispatch(updateChildInformation({ community: item.name }))
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={nationalityList}
              title={nationalityLabel}
              isRequired
              placeholder={nationalityPlaceholder}
              onBlur={() => {}}
              error={''}
              handleSelect={(item) =>
                dispatch(updateChildInformation({ nationality: item.name }))
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={bloodGroupLabel}
              placeholder={bloodGroupPlaceholder}
              value={bloodGroup}
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value: string) => {
                dispatch(updateChildInformation({ bloodGroup: value }))
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={enrollmentNumberLabel}
              placeholder={enterEnrollment}
              value={enrollmentNumber}
              onBlur={() => {}}
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
              onBlur={() => {}}
              isRequired
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
              value={password}
              onBlur={() => {}}
              isRequired
              error={''}
              width="100%"
              onChange={(value: string) => {
                dispatch(updateChildInformation({ password: value }))
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
