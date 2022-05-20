/* eslint-disable no-unused-vars */
import React, { ReactElement, useEffect, useState } from 'react'
import {
  FlexWrapper,
  EditableDropdown,
  DropdownWrapper,
  Input,
} from 'components'
import strings from 'locale/en'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import { getFeeDescriptions, getFeeMaster, updateTotalFeeDetails } from 'redux/fms/actions'
import getDescriptionDropdown from 'helpers/getDescriptionDropdown'
import { resetPaymentValues } from '../const'
import { PayProps } from '../typings'
import DatePicker from 'react-datepicker'
import { format } from 'date-fns'
import { DATE_FORMAT_MMDDYYYY } from 'const/dateFormat'

const Pay = ({ values, setValues }: PayProps): ReactElement => {
  const {
    acamedic: { feeTypeList, courseList, termList, paymentModes },
    fms: { feeMasterList, feeDescriptionList, selectedStudentDetails }
  } = useSelector((state: RootState) => ({
    acamedic: state.acamedic,
    fms: state.fms
  }),
    shallowEqual)

  const dispatch = useDispatch()
  const [resetValues, setResetValues] = useState(resetPaymentValues)
  const [showOtherAmount, setShowOtherAmount] = useState(false)

  const filteredDescriptions = values.feeType
    ? feeDescriptionList.filter(
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
      course.description === values?.description &&
      course.title === values?.feeType
  )
  const terms: any = termsToPay.map((term) =>
    termList.find((obj) => obj.name === term.terms)
  )

  const amountToPay = coursesToFilter.find(
    (course) =>
      course.description === values?.description &&
      course.title === values?.feeType &&
      course.terms === values?.term
  )
  const amountList = amountToPay
    ? [
      {
        id: 'amount',
        name: amountToPay?.amount || ''
      },
      {
        id: 'other',
        name: 'Other'
      }
    ]
    : [
      {
        id: 'other',
        name: 'Other'
      }
    ]

  const sum = coursesToFilter.reduce((sum, current) => Number(sum) + Number(current.amount), 0)

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
      childInformation: { course, selectTerm, term }
    },
    finance: { otherAmount, otherAmountPlaceHolder }
  } = strings

  useEffect(() => {
    dispatch(getFeeMaster())
    dispatch(getFeeDescriptions())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <FlexWrapper width="100%" justifyContent="center">
      <DropdownWrapper width="50%">
        <EditableDropdown
          dropdownList={feeTypeList}
          title={feeType}
          placeholder={selectFeeType}
          onBlur={() => { }}
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
              referenceId: true,
              bankName: true
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
          onBlur={() => { }}
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
              referenceId: true,
              bankName: true
            })
          }}
          reset={resetValues?.description}
        />
      </DropdownWrapper>
      <DropdownWrapper width="50%">
        {values?.description && (
          <>Total:<span style={{ color: 'red' }}> {sum}</span></>
        )}
      </DropdownWrapper>
      <DropdownWrapper width="50%" >
        <Input
          value={selectedStudentDetails?.coachingCentre}
          isDisabled
          height='50px'
          label={course}
        />
      </DropdownWrapper>
      {/* <DropdownWrapper width="50%">
        <EditableDropdown
          dropdownList={filteredCourses}
          title={course}
          placeholder={selectCourse}
          onBlur={() => { }}
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
      </DropdownWrapper> */}
      <DropdownWrapper width="50%">
        <EditableDropdown
          dropdownList={[...terms]}
          title={term}
          placeholder={selectTerm}
          onBlur={() => { }}
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
              referenceId: true,
              bankName: true
            })
          }}
          reset={resetValues?.term}
        />
      </DropdownWrapper>
      <DropdownWrapper width="50%">
        <EditableDropdown
          dropdownList={amountList}
          title={selectAmountLabel}
          isDisabled={showOtherAmount}
          placeholder={selectAmountPlaceholder}
          onBlur={() => { }}
          error={''}
          handleSelect={(item) => {
            setValues({
              ...values,
              amount: item.name === 'Other' ? '' : item.name,
              paymentMode: '',
              referenceId: ''
            })
            dispatch(updateTotalFeeDetails({
              amount: sum,
              academicYear: amountToPay?.academicYear
            }))
            if (item.name === 'Other') {
              setShowOtherAmount(true)
            }
            setResetValues({
              ...resetPaymentValues,
              paymentMode: true,
              referenceId: true,
              bankName: true
            })
          }}
          reset={resetValues?.amount}
        />
      </DropdownWrapper>
      {showOtherAmount && (
        <>
          <DropdownWrapper width="50%">
            <Input
              label={otherAmount}
              placeholder={otherAmountPlaceHolder}
              value={values?.amount}
              onBlur={() => { }}
              error={''}
              width="100%"
              onChange={(value: string) => {
                const amountValue = Number(value)
                if (amountValue > 0 && !isNaN(amountValue)) {
                  setValues({
                    ...values,
                    amount: value,
                    paymentMode: '',
                    referenceId: ''
                  })
                }
              }}
              height="50px" />
          </DropdownWrapper>
        </>
      )}
      {values?.amount && (
        <DropdownWrapper width='50%'>
          <b>Balance: {values?.amount ? <span style={{ color: 'red' }}> {sum - values?.amount}</span> : ''}</b>
        </DropdownWrapper>
      )}
      <DropdownWrapper width='50%'>
        <EditableDropdown
          dropdownList={paymentModes}
          title={paymentTypeLabel}
          placeholder={paymentTypePlaceholder}
          onBlur={() => { }}
          error={''}
          handleSelect={(item) => {
            setValues({
              ...values,
              paymentMode: item.name,
              referenceId: ''
            })
            setResetValues({ ...resetPaymentValues, referenceId: true, bankName: true })
          }}
          reset={resetValues?.paymentMode}
        />
      </DropdownWrapper>
      {
        values?.paymentMode === 'Cash' && (
          <>
            <DropdownWrapper width="50%">
              <Input
                placeholder={referenceId}
                value={values?.referenceId}
                onBlur={() => { }}
                error={''}
                onChange={(value: string) => {
                  setValues({
                    ...values,
                    referenceId: value
                  })
                  setResetValues({ ...resetPaymentValues, bankName: true })
                }}
                height="40px"
              />
            </DropdownWrapper>
            <DropdownWrapper width='50%'>
              <Input
                value={values?.bankName}
                placeholder="Enter Bank Name"
                height='30px'
                onChange={(value: string) => {
                  setValues({
                    ...values,
                    bankName: value
                  })
                  setResetValues(resetPaymentValues)
                }}
              />
            </DropdownWrapper>
            <DropdownWrapper width='50%'>
              <DatePicker
                selected={values?.dateOn ? new Date(values?.dateOn) : new Date()}
                onSelect={(dates: Date) => {
                  setValues({
                    ...values,
                    dateOn: dates ? format(dates, DATE_FORMAT_MMDDYYYY) : ''
                  })
                }}
                onChange={(dates: Date) => {
                  setValues({
                    ...values,
                    dateOn: dates ? format(dates, DATE_FORMAT_MMDDYYYY) : ''
                  })
                }}
                placeholderText={'Date'}
                customInput={
                  <Input
                    value={values?.dateOn}
                    isRequired
                    inputType="text"
                    placeholder={'From Date'}
                    suffix={['far', 'calendar']}
                  />
                }
              />
            </DropdownWrapper>
          </>
        )
      }
    </FlexWrapper >
  )
}

export default Pay
