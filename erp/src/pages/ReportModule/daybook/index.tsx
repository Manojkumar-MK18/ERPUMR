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
import { shallowEqual, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { initialValues, tableHeader } from './const'
import DatePicker from 'react-datepicker'
import { DatePickerWrapper } from 'pages/subcomponents'
import { format } from 'date-fns'
import { DATE_FORMAT_YYYYMMDD } from 'const/dateFormat'
import { DropdownListProps } from 'components/EditableDropdown/typings'

const DayReportBook = (): ReactElement => {
    const {
        acamedic: {
            feeTypeList
        }
    } = useSelector((state: RootState) => state, shallowEqual)

    const [values, setValues] = useState(initialValues)
    console.log(values);

    return (
        <PageWrapper>
            <SectionTitle title='Day Book Reports' />
            <FlexWrapper noPadding>
                <DropdownWrapper>
                    <DatePickerWrapper>
                        <DatePicker
                            selected={values?.fromDate ? new Date(values?.fromDate) : new Date()}
                            onSelect={(date: Date) => {
                                setValues({
                                    ...values,
                                    fromDate: date ? format(date, DATE_FORMAT_YYYYMMDD) : ''
                                })
                            }}
                            onChange={(date: Date) => {
                                setValues({
                                    ...values,
                                    fromDate: date ? format(date, DATE_FORMAT_YYYYMMDD) : ''
                                })
                            }}
                            placeholderText={'From Date'}
                            customInput={
                                <Input
                                    value={values?.fromDate}
                                    label="From Date"
                                />
                            }
                        />
                    </DatePickerWrapper>
                </DropdownWrapper>
                <DropdownWrapper>
                    <DatePickerWrapper>
                        <DatePicker
                            selected={values?.toDate ? new Date(values?.toDate) : new Date()}
                            onSelect={(date: Date) => {
                                setValues({
                                    ...values,
                                    toDate: date ? format(date, DATE_FORMAT_YYYYMMDD) : ''
                                })
                            }}
                            onChange={(date: Date) => {
                                setValues({
                                    ...values,
                                    toDate: date ? format(date, DATE_FORMAT_YYYYMMDD) : ''
                                })
                            }}
                            placeholderText={'To Date'}
                            customInput={
                                <Input
                                    value={values?.fromDate}
                                    label="To Date"
                                />
                            }
                        />
                    </DatePickerWrapper>
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={feeTypeList}
                        title="Fee Type"
                        placeholder='Select Fee Type'
                        handleSelect={(value: DropdownListProps) => {
                            setValues({
                                ...values, acedemicYear: value?.name
                            })
                        }}
                    />
                </DropdownWrapper>
                <Button style={{ marginTop: "24px" }}>Submit</Button>
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