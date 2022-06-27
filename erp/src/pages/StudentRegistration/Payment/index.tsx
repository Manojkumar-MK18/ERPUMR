/* eslint-disable no-unused-vars */
import {
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  Input,
  PageWrapper,
  SectionTitle
} from 'components'
import strings from 'locale/en'
import getFeeDescriptionDropdown from 'pages/FeesManagementSystem/AddFeeMaster/helpers'
import { ReactElement, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getFeeDescriptions, getFeeMaster } from 'redux/fms/api'
import { RootState } from 'redux/store'
import { Body } from 'typography'
import {
  feesTableHeader,
  initialPaymentValues,
  resetPaymentValues
} from '../const'
import TableHeader, { TableWrapper, TableRow } from './subcomponent'

const Payment = (): ReactElement => {
  const {
    acamedic: { feeTypeList, termList },
    fms: { feeMasterList, selectedStudentDetails }
  } = useSelector(
    (state: RootState) => ({
      fms: state.fms,
      acamedic: state.acamedic
    }),
    shallowEqual
  )

  const {
    fms: {
      feeDescription: {
        feeType,
        selectFeeType,
        selectFeeDescription,
        feeDescription
      }
    },
    studentRegistration: {
      childInformation: { course }
    }
  } = strings

  const dispatch = useDispatch()

  const [values, setValues] = useState(initialPaymentValues)
  const [resetValues, setResetValues] = useState(resetPaymentValues)

  const filteredDescription = values?.feeType
    ? feeMasterList.filter((des) => des?.title === values?.feeType)
    : []

  const coursesToFilter =
    values.feeType && values.description
      ? feeMasterList.filter(
          (description) =>
            description.title === values.feeType &&
            description.description === values.description
        )
      : []

  const termsToPay = coursesToFilter.filter(
    (course) =>
      course.description === values?.description &&
      course.title === values?.feeType
  )
  const terms: any = termsToPay.map((term) =>
    termList.find((obj) => obj.name === term.terms)
  )

  const sum = coursesToFilter.reduce(
    (sum, current) => Number(sum) + Number(current.amount),
    0
  )

  useEffect(() => {
    dispatch(getFeeMaster())
    dispatch(getFeeDescriptions())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title="Pay" hasBackButton />
      </FlexWrapper>
      <div>
        {values?.description && (
          <>
            Total:<span style={{ color: 'red' }}> {sum}</span>
          </>
        )}
      </div>
      <FlexWrapper>
        <DropdownWrapper>
          <EditableDropdown
            title={feeType}
            placeholder={selectFeeType}
            dropdownList={feeTypeList}
            handleSelect={(item) => {
              setValues({
                ...values,
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
        <DropdownWrapper>
          <EditableDropdown
            title={feeDescription}
            placeholder={selectFeeDescription}
            dropdownList={getFeeDescriptionDropdown(filteredDescription)}
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
        <DropdownWrapper>
          <Input
            value={selectedStudentDetails?.coachingCentre}
            isDisabled
            height="50px"
            label={course}
          />
        </DropdownWrapper>
      </FlexWrapper>
      <FlexWrapper>
        <>
          <TableWrapper>
            <Table size="sm" responsive="sm">
              <TableHeader>
                <TableRow>
                  {feesTableHeader?.map((header, index) => (
                    <th key={`header-${index}`}>{header}</th>
                  ))}
                </TableRow>
              </TableHeader>
              <tbody>
                {termsToPay.map((data, index) => (
                  <TableRow key={index}>
                    <td>{data?.terms}</td>
                    <td>{data?.amount}</td>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        </>
      </FlexWrapper>
    </PageWrapper>
  )
}

export default Payment
