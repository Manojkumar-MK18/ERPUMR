/* eslint-disable no-unused-vars */
import {
  Button,
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  Input,
  PageWrapper,
  SectionTitle
} from 'components'
import strings from 'locale/en'
import getFeeDescriptionDropdown from 'pages/FeesManagementSystem/AddFeeMaster/helpers'
import { ChangeEvent, ReactElement, useEffect, useState } from 'react'
import { Form, FormControl, Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { addFeePayment, getFeeDescriptions, getFeeMaster } from 'redux/fms/api'
import { RootState } from 'redux/store'
import { Body } from 'typography'
import {
  feesTableHeader,
  initialPaymentValues,
  resetPaymentValues
} from '../const'
import TableHeader, { TableWrapper, TableRow, HelperText } from './subcomponent'
import DatePicker from 'react-datepicker'
import { format } from 'date-fns'
import { DATE_FORMAT_MMDDYYYY } from 'const/dateFormat'
import { ActionButton } from 'pages/HumanResources/LeaveApproval/subcomponents'
import { useHistory } from 'react-router-dom'
import { updateFeeDetails, updatePaymentMode, updateTotalFeeDetails } from 'redux/fms/actions'
import { StringDecoder } from 'string_decoder'

const Payment = (): ReactElement => {
  const {
    acamedic: { feeTypeList, termList, paymentModes },
    fms: { feeMasterList, selectedStudentDetails, selectedFeetotalDetails },
    cashierName
  } = useSelector(
    (state: RootState) => ({
      fms: state.fms,
      acamedic: state.acamedic,
      cashierName: state.user.userInfo?.userDetail.firstName,
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
  const history = useHistory()

  const [values, setValues] = useState(initialPaymentValues)
  const [resetValues, setResetValues] = useState(resetPaymentValues)
  const [selectedCheckBox, setSelectedCheckBox] = useState<Array<any>>([]);
  const [disable, setDisable] = useState<any>(true);
  const [amountData, setamountData] = useState({});

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

  const amountToPay = coursesToFilter.find(
    (course) =>
      course.description === values?.description &&
      course.title === values?.feeType &&
      course.terms === values?.term
  )

  const sum = coursesToFilter.reduce((sum, current) => Number(sum) + Number(current.amount), 0)
  const totalTermAmount = termsToPay.reduce((sum, current) => Number(sum) + Number(current.amount), 0)

  const handleClickCheckBox = (e: any) => {
    const { name, checked } = e.target;
    setSelectedCheckBox([...selectedCheckBox, name]);
    if (checked) {
      setDisable(false)
    } else if (!checked) {
      setSelectedCheckBox(selectedCheckBox.filter(item => item !== name));
      setDisable(true)
    }
  };

  const handleOnChange = (event: any) => {
    setamountData({
      ...amountData,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    dispatch(getFeeMaster())
    dispatch(getFeeDescriptions())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      <FlexWrapper noPadding  >
        <SectionTitle title="Pay" hasBackButton />
      </FlexWrapper>
      <FlexWrapper noPadding justifyContent='end'>
        <Input
          width='20%'
          value={''}
          placeholder='Search'
        />
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
                    <td>
                      <Form.Check
                        key={data?.id}
                        name={data?.terms}
                        id={data?.id}
                        checked={selectedCheckBox.includes(data?.terms)}
                        onClick={handleClickCheckBox}
                      />
                    </td>
                    <td>{data?.terms}</td>
                    <td className="tableInput">
                      <Input
                        height="40px"
                        value={data?.amount}
                      />
                    </td>
                    <td className="tableInput">
                      <Input
                        height="20px"
                        placeholder=''
                        value={'0'}
                      />
                    </td>
                    <td className="tableInput">
                      <Input value={''} height="20px" />
                    </td>
                    <td className="tableInput">
                      <Input value={'0'} height="20px" />
                    </td>
                    <td className="tableInput">
                      <Input value={''} height="20px" />
                    </td>
                    <td className="tableInput">
                    </td>
                    <td className="tableInput">
                      <FormControl
                        name={data?.terms}
                        disabled={disable}
                        onChange={handleOnChange}
                      />
                    </td>
                  </TableRow>
                ))}
                <TableRow>
                  <td></td>
                  <td>Total</td>
                  <td className="tableInput">
                    <Input
                      value={totalTermAmount}
                      height="40px"
                    />
                  </td>
                  <td className="tableInput">
                    <Input
                      value={'0'}
                      height="20px"
                      placeholder=''
                    />
                  </td>
                  <td className="tableInput">
                    <Input
                      value={''}
                      height="20px"
                    />
                  </td>
                  <td className="tableInput">
                    <Input value={'0'} height="20px" />
                  </td>
                  <td className="tableInput">
                    <Input value={''} height="20px" />
                  </td>
                  <td className="tableInput">Tot.Amt</td>
                  <td className="tableInput">
                    <Input
                      value={values?.amount}
                      height="20px"
                      onChange={(value: string) => {
                        setValues({
                          ...values,
                          amount: value
                        })
                        dispatch(updateTotalFeeDetails({
                          amount: sum,
                          academicYear: amountToPay?.academicYear
                        }))
                      }}
                    />
                  </td>
                </TableRow>
                <TableRow>
                  <td> </td>
                  <td>Remarks</td>
                  <td colSpan={5}>
                    <Input inputType="textarea" value={''} height="90px" />
                  </td>
                </TableRow>
                <TableRow>
                  <td></td>
                  <td></td>
                  <td >
                    <div>MOP</div>
                    <EditableDropdown
                      placeholder="MOP"
                      isRequired
                      dropdownList={paymentModes}
                      handleSelect={(item) => {
                        setValues({
                          ...values,
                          paymentMode: item?.name
                        })
                      }}
                    />
                  </td>
                  <td colSpan={2}>
                    <div>Date</div>
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
                  </td>
                  <td  >
                    <div>Reference Id</div>
                    <Input
                      value={values?.referenceId}
                      height="40px"
                      placeholder='Ref Id'
                      onChange={(value: string) => {
                        setValues({
                          ...values,
                          referenceId: value
                        })
                      }}
                    />
                  </td>
                  <td>
                    <div>Bank Name</div>
                    <Input
                      value={values?.bankName}
                      height="40px"
                      placeholder='Bank Name'
                      onChange={(value: string) => {
                        setValues({
                          ...values,
                          bankName: value
                        })
                      }}
                    />
                  </td>
                  <td>
                    <HelperText > Net Payment </HelperText>
                  </td>
                  <td >
                    <HelperText>
                      <Input value="" height="40px" />
                    </HelperText>
                  </td>
                </TableRow>
              </tbody>
            </Table>
          </TableWrapper>
        </>
      </FlexWrapper>
      <FlexWrapper justifyContent='center'>
        <ActionButton
          onClick={() => {
            history.goBack()
          }}
        >
          Back
        </ActionButton>
        <Button
          onClick={() => {
            const payload = {
              studentId: selectedStudentDetails?.userId,
              paid: 'paid',
              amount: values?.amount,
              referenceId: values?.referenceId,
              modeOfPayment: values?.paymentMode,
              description: values?.description,
              paidTypes: [values?.feeType],
              date: values?.dateOn,
              balance: Number(selectedFeetotalDetails?.amount) - Number(values?.amount),
              cashier: cashierName,
              bankName: values?.bankName,
              status: 'ACTIVE'
            }
            dispatch(addFeePayment(payload))
            dispatch(updatePaymentMode({
              cash: values?.paymentMode,
              dateOn: values?.dateOn
            }))
            dispatch(updateFeeDetails({
              amount: values?.amount
            }))
          }}
        >Save</Button>
      </FlexWrapper>
    </PageWrapper>
  )
}

export default Payment
