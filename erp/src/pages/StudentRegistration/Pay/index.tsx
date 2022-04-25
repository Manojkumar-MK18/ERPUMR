import { ReactElement, useEffect, useState } from 'react'
import {
  FlexWrapper,
  EditableDropdown,
  DropdownWrapper,
  Input
} from 'components'
import strings from 'locale/en'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import { getFeeMaster } from 'redux/fms/actions'
import getDescriptionDropdown from 'helpers/getDescriptionDropdown'
import { resetPaymentValues } from '../const'
import { PayProps } from '../typings'

const Pay = ({ values, setValues }: PayProps): ReactElement => {
  const {
    acamedic: { feeTypeList, courseList, termList, paymentModes },
    fms: { feeMasterList }
  } = useSelector((state: RootState) => state, shallowEqual)
  const dispatch = useDispatch()
  const [resetValues, setResetValues] = useState(resetPaymentValues)
  
  const filteredDescriptions = values.feeType
    ? feeMasterList.filter(
        (description) => description.title === values.feeType
      )
    : []

  const coursesToFilter =
    values.feeType && values.description
      ? feeMasterList.filter(
          (description) =>
            description.title === values.feeType &&
            description.description === values.description
        )
      : []
  const courses = coursesToFilter.map((course) =>
    courseList.find((obj) => obj.id === course.courseId)
  )
  const filteredCourses: any = courses?.length ? courses : []

  const termsToPay = coursesToFilter.filter(
    (course) =>
      course.courseId === values?.courseId &&
      course.description === values?.description &&
      course.title === values?.feeType
  )
  const terms: any = termsToPay.map((term) =>
    termList.find((obj) => obj.name === term.terms)
  )

  const amountToPay = coursesToFilter.find(
    (course) =>
      course.courseId === values?.courseId &&
      course.description === values?.description &&
      course.title === values?.feeType &&
      course.terms === values?.term
  )
  const amountDefaultValue = {
    id: 'amount',
    name: amountToPay?.amount || ''
  }

  const {
    fms: {
      feeDescription: {
        feeType,
        selectFeeType,
        selectFeeDescription,
        feeDescription
      }
    },
    pay: {
      selectAmountLabel,
      selectAmountPlaceholder,
      paymentTypePlaceholder,
      paymentTypeLabel,
      referenceId
    },
    studentRegistration: {
      childInformation: { selectCourse, course, selectTerm, term }
    }
  } = strings

  useEffect(() => {
    dispatch(getFeeMaster())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <FlexWrapper width="100%" justifyContent="center">
      <DropdownWrapper width="50%">
        <EditableDropdown
          dropdownList={feeTypeList}
          title={feeType}
          placeholder={selectFeeType}
          onBlur={() => {}}
          error={''}
          handleSelect={(item) => {
            setValues({
              feeType: item.name,
              description: '',
              courseId: '',
              term: '',
              amount: '',
              paymentMode: '',
              referenceId: ''
            })
            setResetValues({
              ...resetPaymentValues,
              description: true,
              courseId: true,
              term: true,
              amount: true,
              paymentMode: true,
              referenceId: true
            })
          }}
          reset={resetValues?.feeType}
        />
      </DropdownWrapper>
      <DropdownWrapper width="50%">
        <EditableDropdown
          dropdownList={getDescriptionDropdown(filteredDescriptions)}
          title={feeDescription}
          placeholder={selectFeeDescription}
          onBlur={() => {}}
          error={''}
          handleSelect={(item) => {
            setValues({
              ...values,
              description: item.name,
              courseId: '',
              term: '',
              amount: '',
              paymentMode: '',
              referenceId: ''
            })
            setResetValues({
              ...resetPaymentValues,
              courseId: true,
              term: true,
              amount: true,
              paymentMode: true,
              referenceId: true
            })
          }}
          reset={resetValues?.description}
        />
      </DropdownWrapper>
      <DropdownWrapper width="50%">
        <EditableDropdown
          dropdownList={filteredCourses}
          title={course}
          placeholder={selectCourse}
          onBlur={() => {}}
          error={''}
          handleSelect={(item) => {
            setValues({
              ...values,
              courseId: item.id,
              term: '',
              amount: '',
              paymentMode: '',
              referenceId: ''
            })
            setResetValues({
              ...resetPaymentValues,
              term: true,
              amount: true,
              paymentMode: true,
              referenceId: true
            })
          }}
          reset={resetValues?.courseId}
        />
      </DropdownWrapper>
      <DropdownWrapper width="50%">
        <EditableDropdown
          dropdownList={[...terms]}
          title={term}
          placeholder={selectTerm}
          onBlur={() => {}}
          error={''}
          handleSelect={(item) => {
            setValues({
              ...values,
              term: item.name,
              amount: '',
              paymentMode: '',
              referenceId: ''
            })
            setResetValues({
              ...resetPaymentValues,
              amount: true,
              paymentMode: true,
              referenceId: true
            })
          }}
          reset={resetValues?.term}
        />
      </DropdownWrapper>
      <DropdownWrapper width="50%">
        <EditableDropdown
          dropdownList={[amountDefaultValue]}
          title={selectAmountLabel}
          placeholder={selectAmountPlaceholder}
          onBlur={() => {}}
          error={''}
          handleSelect={(item) => {
            setValues({
              ...values,
              amount: item.name,
              paymentMode: '',
              referenceId: ''
            })
            setResetValues({
              ...resetPaymentValues,
              paymentMode: true,
              referenceId: true
            })
          }}
          defaultValue={amountDefaultValue}
          reset={resetValues?.amount}
        />
      </DropdownWrapper>
      <DropdownWrapper width="50%">
        <EditableDropdown
          dropdownList={paymentModes}
          title={paymentTypeLabel}
          placeholder={paymentTypePlaceholder}
          onBlur={() => {}}
          error={''}
          handleSelect={(item) => {
            setValues({
              ...values,
              paymentMode: item.name,
              referenceId: ''
            })
            setResetValues({ ...resetPaymentValues, referenceId: true })
          }}
          reset={resetValues?.paymentMode}
        />
      </DropdownWrapper>
      {values?.paymentMode === 'Online' && (
        <DropdownWrapper width="50%">
          <Input
            placeholder={referenceId}
            value={values?.referenceId}
            onBlur={() => {}}
            error={''}
            onChange={(value: string) => {
              setValues({
                ...values,
                referenceId: value
              })
              setResetValues(resetPaymentValues)
            }}
            height="50px"
          />
        </DropdownWrapper>
      )}
    </FlexWrapper>
  )
}

export default Pay
