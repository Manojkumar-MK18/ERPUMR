import { ReactElement, useState } from 'react'
import {
  PageWrapper,
  PhotoUploader,
  EditableDropdown,
  DropdownWrapper,
  Input,
  CardWrapper,
  FlexWrapper,
  SectionTitle,
  Button
} from 'components'
import { DatePickerWrapper, InfoWrapper } from './subcomponents'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { AddNewStaff } from 'redux/Leave/api'
import DatePicker from 'react-datepicker'
import format from 'date-fns/format'
import {
  DATE_FORMAT_YYYYMMDD,
} from '../../../const/dateFormat'
import { validateEmail, validatePhone } from 'helpers/formValidation'

const AddStaffRegistration = (): ReactElement => {

  const {
    staffDropdown: {
      gender: genderList,
      nationality: nationalityList,
      marital_Status: marrtialStatus,
      technical_flag: staffRole
    },
    staffDetails
  } = useSelector(
    (state: RootState) => ({
      staffDetails: state.leave.addStaff,
      staffDropdown: state.leave
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  // eslint-disable-next-line no-unused-vars
  const [values, setValues] = useState(staffDetails)
  const [dob, setDOB] = useState<any>(new Date())
  const [mobilenoerror, setmobileError] = useState('')
  const [mailError, setMailError] = useState('')

  const canSave =
    !!values?.emailID &&
    !!values?.firstName &&
    !!values?.technical_flag &&
    !!values?.lastName &&
    !!values?.gender

  const handleSubmit = () => {
    dispatch(AddNewStaff({
      ...values,
      dob: format(dob, DATE_FORMAT_YYYYMMDD),
    }))
  }

  return (
    <CardWrapper>
      <PageWrapper>
        <FlexWrapper noPadding>
          <SectionTitle title='Staff Registration' hasBackButton />
        </FlexWrapper>
        <FlexWrapper width="100%" justifyContent="center" noPadding>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={staffRole}
              title={'Select Role'}
              placeholder={'Role'}
              onBlur={() => { }}
              error={''}
              handleSelect={(role) => {
                setValues({ ...values, technical_flag: role.name })
              }} />
          </DropdownWrapper>
        </FlexWrapper>
        <InfoWrapper>
          <PhotoUploader
          />
          <FlexWrapper width="100%">
            <DropdownWrapper>
              <Input
                label={'First Name'}
                isRequired
                placeholder={'Enter First Name'}
                value={values?.firstName}
                width="100%"
                onChange={(value: string) => {
                  setValues({ ...values, firstName: value })
                }}
                height="50px" />
            </DropdownWrapper>
            <DropdownWrapper>
              <Input
                label={'Last Name'}
                isRequired
                placeholder={'Enter Last Name'}
                value={values?.lastName}
                onBlur={() => { }}
                error={''}
                width="100%"
                onChange={(value: string) => {
                  setValues({ ...values, lastName: value })
                }}
                height="50px" />
            </DropdownWrapper>
            <DropdownWrapper>
              <EditableDropdown
                dropdownList={genderList}
                title={'Gender'}
                placeholder={'Select Gender'}
                onBlur={() => { }}
                error={''}
                handleSelect={(genderList) => {
                  setValues({ ...values, gender: genderList.name })
                }} />
            </DropdownWrapper>
            <DropdownWrapper>
              <Input
                label={'Address'}
                isRequired
                placeholder={'Enter Address'}
                value={values?.address}
                onBlur={() => { }}
                error={''}
                width="100%"
                onChange={(value: string) => {
                  setValues({ ...values, address: value })
                }}
                height="50px" />
            </DropdownWrapper>
            <DropdownWrapper>
              <DatePickerWrapper>
                <DatePicker
                  selected={dob}
                  onSelect={(date) => setDOB(date)}
                  onChange={(date) => setDOB(date)}
                  placeholderText={'Date of Birth'}
                  customInput={
                    <Input
                      label={'Date of Birth'}
                      value={dob}
                      isRequired
                      inputType="text"
                      placeholder={'Date of birth'}
                      onChange={(date) => setDOB(date)}
                      suffix={['far', 'calendar']}
                    />
                  }
                />
              </DatePickerWrapper>
            </DropdownWrapper>
            <DropdownWrapper>
              <EditableDropdown
                dropdownList={marrtialStatus}
                title={'Marital status'}
                placeholder={'Select Marital status'}
                onBlur={() => { }}
                error={''}
                handleSelect={(status) => {
                  setValues({ ...values, marital_Status: status.name })
                }} />
            </DropdownWrapper>
            <DropdownWrapper>
              <Input
                label={'Mobile No'}
                placeholder={'Enter Mobile No'}
                value={values?.mobileNumber}
                onBlur={() => {
                  const error = validatePhone(values?.mobileNumber)
                  setmobileError(error)
                }}
                error={mobilenoerror}
                width="100%"
                onChange={(value: string) => {
                  setValues({ ...values, mobileNumber: value })
                }}
                height="50px" />
            </DropdownWrapper>
            <DropdownWrapper>
              <Input
                label={'Email'}
                placeholder={'Enter Email'}
                value={values?.emailID}
                onBlur={() => {
                  const error = validateEmail(values?.emailID)
                  setMailError(error)
                }}
                error={mailError}
                width="100%"
                onChange={(value: string) => {
                  setValues({ ...values, emailID: value })
                }}
                height="50px" />
            </DropdownWrapper>
            <DropdownWrapper>
              <Input
                label={'Qualification'}
                placeholder={'Qualification'}
                value={values?.qualification}
                onBlur={() => { }}
                error={''}
                width="100%"
                onChange={(value: string) => {
                  setValues({ ...values, qualification: value })
                }}
                height="50px" />
            </DropdownWrapper>
            <DropdownWrapper>
              <EditableDropdown
                dropdownList={nationalityList}
                title={'Nationality'}
                placeholder={'Select Nationality'}
                onBlur={() => { }}
                error={''}
                handleSelect={(item) => {
                  setValues({ ...values, nationality: item.name })
                }} />
            </DropdownWrapper>
            <DropdownWrapper>
              <Input
                label={'Blood Group'}
                placeholder={'Enter Blood Group'}
                value={values?.blood_Group}
                onBlur={() => { }}
                error={''}
                width="100%"
                onChange={(value: string) => {
                  setValues({ ...values, blood_Group: value })
                }}
                height="50px" />
            </DropdownWrapper>
            <DropdownWrapper>
              <Input
                label={'Department'}
                placeholder={'Enter Department'}
                value={values?.department}
                onBlur={() => { }}
                error={''}
                width="100%"
                onChange={(value: string) => {
                  setValues({ ...values, department: value })
                }}
                height="50px" />
            </DropdownWrapper>
          </FlexWrapper>
        </InfoWrapper>
        <FlexWrapper justifyContent='center'>
          <Button
            disabled={!canSave}
            onClick={handleSubmit}
          >Submit</Button>
        </FlexWrapper>
      </PageWrapper>
    </CardWrapper>
  )
}

export default AddStaffRegistration
