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
import { Form, Table } from 'react-bootstrap'
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
import DatePicker from 'react-datepicker'
import { format } from 'date-fns'
import { DATE_FORMAT_MMDDYYYY } from 'const/dateFormat'

const Payment = (): ReactElement => {
  const {
    acamedic: { feeTypeList, termList, paymentModes },
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
  const [selectedCheckBox, setSelectedCheckBox] = useState<Array<any>>([]);
  const [disable, setDisable] = useState(true);

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

  useEffect(() => {
    dispatch(getFeeMaster())
    dispatch(getFeeDescriptions())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(selectedCheckBox);

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
                        value={values?.referenceId}
                      />
                    </td>
                    <td className="tableInput">
                      <Input value={''} height="20px" />
                    </td>
                    <td className="tableInput">
                      <Input value={''} height="20px" />
                    </td>
                    <td className="tableInput">
                      <Input value={''} height="20px" />
                    </td>
                    <td className="tableInput">
                    </td>
                    <td className="tableInput">
                      <Input
                        value={''}
                        height="20px"
                        isDisabled={disable}
                      />
                    </td>
                  </TableRow>
                ))}
                <TableRow>
                  <td></td>
                  <td>Total</td>
                  <td className="tableInput">
                    <Input value={totalTermAmount} height="40px" />
                  </td>
                  <td className="tableInput">
                    <Input
                      value={''}
                      height="20px"
                      placeholder='df'
                    />
                  </td>
                  <td className="tableInput">
                    <Input value={''} height="20px" />
                  </td>
                  <td className="tableInput">
                    <Input value={''} height="20px" />
                  </td>
                  <td className="tableInput">
                    <Input value={''} height="20px" />
                  </td>
                  <td className="tableInput">Tot.Amt</td>
                  <td className="tableInput">
                    <Input value={''} height="20px" />
                  </td>
                </TableRow>
                <TableRow>
                  <td> </td>
                  <td>Remarks</td>
                  <td colSpan={6}>
                    <Input inputType="textarea" value={''} height="90px" />
                  </td>
                </TableRow>
                <TableRow>
                  <td></td>
                  <td></td>
                  <td >
                    <div>MOP</div>
                    <EditableDropdown
                      placeholder=""
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
                    <div>Cheque No</div>
                    <Input
                      value=""
                      height="40px"
                    />
                  </td>
                  <td>
                    <div>Bank Name</div>
                    <Input value="" height="40px" />
                  </td>
                  <td>Net Payment</td>
                  <td>
                    <Input value="" height="40px" />
                  </td>
                </TableRow>
              </tbody>
            </Table>
          </TableWrapper>
        </>
      </FlexWrapper>
    </PageWrapper>
  )
}

export default Payment
