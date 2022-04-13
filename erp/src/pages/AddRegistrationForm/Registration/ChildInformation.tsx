import { ReactElement } from 'react'
import {
  PageWrapper,
  PhotoUploader,
  EditableDropdown,
  DropdownWrapper,
  Input
} from 'components'
import { InfoWrapper, FlexWrapper, DatePickerWrapper } from '../subcomponents'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import DatePicker from 'react-datepicker'
import { updateChildInformation } from 'redux/studentRegistration/actions'
import strings from 'locale/en'
import { checkBoxDropdownList } from 'const'

const ChildInformation = (): ReactElement => {
  const {
    academic: {
      genderList,
      nationalityList,
      categoryList,
      casteList,
      religionList,
      bloodGroupList,
      studentTypeList
    },
    childInformation: {
      studentsName,
      fathersName,
      mothersName,
      dateOfBirth,
      aadharNumber
    }
  } = useSelector(
    (state: RootState) => ({
      academic: state.acamedic,
      childInformation: state.studentRegistration.studentRegistration.childInformation
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const {
    studentRegistration: {
      childInformation: {
        studentsNameLabel,
        studentsNamePlaceholder,
        fathersNameLabel,
        fathersNamePlaceholder,
        mothersNameLabel,
        mothersNamePlaceholder,
        dobPlaceholder,
        genderLabel,
        genderPlaceholder,
        dobLabel,
        bloodGroupLabel,
        bloodGroupPlaceholder,
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
        aadharNumberLabel
      }
    }
  } = strings

  return (
    <PageWrapper>
      <InfoWrapper>
        <PhotoUploader />
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
              placeholder={genderPlaceholder}
              onBlur={() => {}}
              error={''}
              handleSelect={(item) =>
                dispatch(updateChildInformation({ gender: item.name }))
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <DatePickerWrapper>
              <DatePicker
                selected={new Date(dateOfBirth)}
                onSelect={(date) =>
                  dispatch(
                    updateChildInformation({
                      dateOfBirth: date?.toDateString()
                    })
                  )
                }
                onChange={(date: Date) => {
                  if (date) {
                    dispatch(
                      updateChildInformation({
                        dateOfBirth: date.toDateString()
                      })
                    )
                  }
                }}
                placeholderText={dobPlaceholder}
                customInput={
                  <Input
                    label={dobLabel}
                    value={dateOfBirth}
                    inputType="text"
                    placeholder={dobPlaceholder}
                    onChange={(date) =>
                      dispatch(updateChildInformation({ dateOfBirth: date }))
                    }
                    suffix={['far', 'calendar']}
                  />
                }
              />
            </DatePickerWrapper>
          </DropdownWrapper> 
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={bloodGroupList}
              title={bloodGroupLabel}
              placeholder={bloodGroupPlaceholder}
              onBlur={() => {}}
              error={''}
              handleSelect={(item) =>
                dispatch(updateChildInformation({ bloodGroup: item.name }))
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={studentTypeList}
              isRequired
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
              isRequired
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
        </FlexWrapper>
      </InfoWrapper>
    </PageWrapper>
  )
}

export default ChildInformation