import { ReactElement, useEffect, useState } from 'react'
import {
  FlexWrapper,
  PageWrapper,
  SectionTitle,
  DropdownWrapper,
  EditableDropdown,
  Input,
  Button,
  Loader
} from 'components'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import strings from 'locale/en'
import SecondaryButton from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import initialState from './const'
import AddFeeMasterValues from './typings'
import {
  addNewFeeMaster,
  editFeeMasterRequest,
  getFeeDescriptions,
  updateEditFeeMaster
} from 'redux/fms/actions'

const AddFeeMaster = (): ReactElement => {
  const {
    acamedic: {
      feeTypeList,
      academicYear: academicYearList,
      year: yearList,
      courseList,
      termList,
      registrationTypeList,
    },
    fms: { isLoading, editFeeMaster,feeDescriptionListDropdown }
  } = useSelector((state: RootState) => state, shallowEqual)

  const filteredFeeType = editFeeMaster
    ? feeTypeList.find((fee) => fee.name === editFeeMaster.title)
    : null
  const feeTypeDefaultValue = {
    id: filteredFeeType?.id || '',
    name: filteredFeeType?.name || ''
  }
  const filteredAcademicYearList = editFeeMaster
    ? academicYearList.find((type) => type.name === editFeeMaster.academicYear)
    : null
  const academicDefaultValue = {
    id: filteredAcademicYearList?.id || '',
    name: filteredAcademicYearList?.name || ''
  }
  const filteredYearList = editFeeMaster
    ? yearList.find((type) => type.name === editFeeMaster.year)
    : null
  const yearDefaultValue = {
    id: filteredYearList?.id || '',
    name: filteredYearList?.name || ''
  }

  const filteredCourseList = editFeeMaster
    ? courseList.find((type) => type.id === editFeeMaster.courseId)
    : null
  const courseDefaultValue = {
    id: filteredCourseList?.id || '',
    name: filteredCourseList?.name || ''
  }
  const filteredTermList = editFeeMaster
    ? termList.find((type) => type.name === editFeeMaster.terms)
    : null
  const termDefaultValue = {
    id: filteredTermList?.id || '',
    name: filteredTermList?.name || ''
  }

  const filteredDescriptionList = editFeeMaster
    ? feeDescriptionListDropdown.find((type) => type.name === editFeeMaster.description)
    : null
 
  const desDefaultValue = {
    id: filteredDescriptionList?.id || '',
    name: filteredDescriptionList?.name || ''
  }

  const filteredRegistreation = editFeeMaster
    ? registrationTypeList.find((type) => type.name === editFeeMaster.regType)
    : null
  const RegDefaultValue = {
    id: filteredRegistreation?.id || '',
    name: filteredRegistreation?.name || ''
  }

  const [values, setValues] = useState<AddFeeMasterValues>({
    ...initialState,
    title: filteredFeeType?.name || initialState.title,
    academicYear: filteredAcademicYearList?.name || initialState.academicYear,
    year: filteredYearList?.name || initialState.year,
    courseId: filteredCourseList?.id || initialState.courseId,
    terms: filteredTermList?.name || initialState.terms,
    amount: editFeeMaster?.amount || initialState.amount,
    description: editFeeMaster?.description || initialState.description,
    regType: editFeeMaster?.regType || initialState.regType
  })

  const {
    fms: {
      feeDescription: {
        selectFeeType,
        feeType,
        selectFeeDescription,
        feeDescription,
        selectRegistrationType,
        registrationType
      },
      feeMaster: { addFeeMasterTitle, editFeeMasterTitle }
    },
    studentRegistration: {
      childInformation: {
        selectYear,
        academicYear,
        year,
        selectCourse,
        course,
        selectTerm,
        term
      }
    },
    finance: { amount },
    button: { save, exit }
  } = strings
  const history = useHistory()
  const dispatch = useDispatch()
  const canSave =
    !!values.title &&
    !!values.academicYear &&
    !!values.year &&
    !!values.courseId &&
    !!values.terms &&
    !!values.amount &&
    !!values.regType &&
    !!values.description

  useEffect(() => {
    dispatch(getFeeDescriptions())

    return () => {
      dispatch(updateEditFeeMaster(null))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper id="container">
      <SectionTitle
        title={editFeeMaster ? editFeeMasterTitle : addFeeMasterTitle}
        hasBackButton
      />
      <FlexWrapper noPadding width="100%">
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={feeTypeList}
            title={selectFeeType}
            placeholder={feeType}
            onBlur={() => { }}
            error={''}
            defaultValue={feeTypeDefaultValue}
            handleSelect={(item) => {
              setValues({
                ...values,
                title: item.name
              })
            }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={feeDescriptionListDropdown}
            title={selectFeeDescription}
            placeholder={feeDescription}
            onBlur={() => { }}
            error={''}
            handleSelect={(item) => {
              setValues({
                ...values,
                description: item.name
              })
            }}
            defaultValue={desDefaultValue }
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={registrationTypeList}
            title={selectRegistrationType}
            placeholder={registrationType}
            onBlur={() => { }}
            error={''}
            handleSelect={(item) => {
              setValues({
                ...values,
                regType: item.name
              })
            }}
            defaultValue={RegDefaultValue}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={academicYearList}
            title={academicYear}
            placeholder={selectYear}
            onBlur={() => { }}
            error={''}
            handleSelect={(item) => {
              setValues({
                ...values,
                academicYear: item.name
              })
            }}
            defaultValue={academicDefaultValue}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={yearList}
            title={year}
            placeholder={selectYear}
            onBlur={() => { }}
            error={''}
            handleSelect={(item) => {
              setValues({
                ...values,
                year: item.name
              })
            }}
            defaultValue={yearDefaultValue}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={courseList}
            title={course}
            placeholder={selectCourse}
            onBlur={() => { }}
            error={''}
            handleSelect={(item) => {
              setValues({
                ...values,
                courseId: item.id
              })
            }}
            defaultValue={courseDefaultValue}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={termList}
            title={term}
            placeholder={selectTerm}
            onBlur={() => { }}
            error={''}
            handleSelect={(item) => {
              setValues({
                ...values,
                terms: item.name
              })
            }}
            defaultValue={termDefaultValue}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            label={amount}
            placeholder={amount}
            value={values?.amount}
            onBlur={() => { }}
            error={''}
            width="100%"
            onChange={(value: string) => {
              const amountValue = Number(value)
              if (amountValue > 0) {
                setValues({
                  ...values,
                  amount: value
                })
              }
            }}
            height="50px"
          />
        </DropdownWrapper>
      </FlexWrapper>
      <FlexWrapper justifyContent="center">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Button
              disabled={!canSave}
              onClick={() => {
                const {
                  title,
                  description,
                  academicYear,
                  year,
                  terms,
                  amount,
                  courseId,
                  regType
                } = values
                editFeeMaster
                  ? dispatch(
                    editFeeMasterRequest({
                      id: `${editFeeMaster?.id}`,
                      title,
                      description,
                      terms,
                      academicYear,
                      year,
                      amount,
                      courseId: `${editFeeMaster?.courseId}`,
                      regType
                    })
                  )
                  : dispatch(
                    addNewFeeMaster({
                      title,
                      description,
                      terms,
                      academicYear,
                      year,
                      amount,
                      courseId,
                      regType
                    })
                  )
              }}
            >
              {save}
            </Button>
            <SecondaryButton
              variant="secondary"
              onClick={() => history.goBack()}
            >
              {exit}
            </SecondaryButton>
          </>
        )}
      </FlexWrapper>
    </PageWrapper>
  )
}

export default AddFeeMaster
