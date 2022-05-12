import {
    Button,
    DropdownWrapper,
    EditableDropdown,
    FlexWrapper,
    Input,
    PageWrapper,
    SectionTitle,
    TableHeader,
    TableRow,
    TableWrapper
} from 'components'
import { ReactElement, useState } from 'react'
import { Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { tableHeader } from './const'
import { fetchDayBookReport } from 'redux/report/api'
import { validateDateOfBirth } from 'helpers/formValidation'

const DayReportBook = (): ReactElement => {
    const {
        acamedic: {
            feeTypeList
        }
    } = useSelector((state: RootState) => state, shallowEqual)

    const dispatch = useDispatch()

    const [startDate, setStartDate] = useState('')
    const [feesType, setFeesType] = useState('')
    const [startDateError, setStartDateError] = useState('')
    const [endDate, setEndDate] = useState('')
    const [endDateError, setEndDateError] = useState('')

    console.log(startDate);
    console.log(endDate);

    return (
        <PageWrapper>
            <SectionTitle title='Day Book Reports' />
            <FlexWrapper noPadding>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={feeTypeList}
                        title="Fee Type"
                        placeholder='Select Fee Type'
                        handleSelect={(value) => {
                            setFeesType(value)
                        }}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <Input
                        label={'Start Date'}
                        placeholder={'enterDob'}
                        value={startDate}
                        isRequired
                        width="100%"
                        onBlur={() => {
                            const error = validateDateOfBirth(startDate)
                            setStartDateError(error)
                        }}
                        error={startDateError}
                        onChange={(value: string) => {
                            setStartDate(value)
                        }}
                        height="50px"
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <Input
                        label={'End Date'}
                        placeholder={'enterDob'}
                        value={endDate}
                        isRequired
                        onBlur={() => {
                            const error = validateDateOfBirth(endDate)
                            setEndDateError(error)
                        }}
                        error={endDateError }
                        width="100%"
                        onChange={(value: string) => {
                            setEndDate(value)
                        }}
                        height="50px"
                    />
                </DropdownWrapper>
                <Button
                    onClick={() => {
                        dispatch(fetchDayBookReport({
                            from: startDate,
                            toDate: endDate,
                            type: feesType
                        }))
                    }}
                    style={{ marginTop: "24px" }}>Submit</Button>
            </FlexWrapper>
            <>
                <FlexWrapper justifyContent='end'>
                    <Button>Export to Excel</Button>
                </FlexWrapper>
                <TableWrapper>
                    <Table size='sm' responsive="sm">
                        <TableHeader>
                            <TableRow>
                                {tableHeader.map((header, index) => (
                                    <th key={`report-${index}`}>{header}</th>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <tbody>
                            <TableRow>
                                <td>Date</td>
                                <td>Receipt number</td>
                                <td>Course</td>
                                <td>Branch</td>
                                <td>Batch</td>
                                <td>Name</td>
                                <td>Admission Number</td>
                                <td>Fee Description</td>
                                <td>Fee Paid</td>
                                <td>Fee</td>
                                <td>Cashier</td>
                            </TableRow>
                        </tbody>
                    </Table>
                </TableWrapper>
            </>
        </PageWrapper>
    )
}

export default DayReportBook