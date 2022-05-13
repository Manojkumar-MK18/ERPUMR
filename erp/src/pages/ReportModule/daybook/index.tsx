import { ReactElement, useState } from 'react'
import {
    PageWrapper,
    SectionTitle,
    FlexWrapper,
    DropdownWrapper,
    EditableDropdown,
    Input,
    TableWrapper,
    TableHeader,
    TableRow,
    Button
} from 'components'
import strings from 'locale/en'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import { validateDateOfBirth } from 'helpers/formValidation'
import Table from 'react-bootstrap/Table'
import { tableHeader } from './const'
import { fetchDayBookReport } from 'redux/report/action'
import moment from 'moment'

const DayBookReport = (): ReactElement => {
    const {
        acamedic: { feeTypeList },
        report: { dayBookReportList },
        cashier
    } = useSelector((state: RootState) =>
    ({
        acamedic: state.acamedic,
        report: state.report,
        cashier: state.user.userInfo?.userDetail.firstName
    }),
        shallowEqual
    )

    const [startDate, setStartDate] = useState('')
    const [feesType, setFeesType] = useState('')
    const [startDateError, setStartDateError] = useState('')
    const [endDate, setEndDate] = useState('')
    const [endDateError, setEndDateError] = useState('')
    const dispatch = useDispatch()

    const {
        fms: {
            feeDescription: { feeType, selectFeeType }
        },
        dayBookReport: { title, startDateLabel, endDateLabel },
        studentRegistration: {
            childInformation: { enterDob }
        },
        button: { search }
    } = strings

    return (
        <PageWrapper id="container">
            <SectionTitle title={title} />
            <FlexWrapper width="100%">
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={feeTypeList}
                        title={feeType}
                        placeholder={selectFeeType}
                        onBlur={() => { }}
                        error={''}
                        handleSelect={(item) => {
                            setFeesType(item.name)
                        }}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <Input
                        label={startDateLabel}
                        placeholder={enterDob}
                        value={startDate}
                        onBlur={() => {
                            const error = validateDateOfBirth(startDate)
                            setStartDateError(error)
                        }}
                        error={startDateError}
                        isRequired
                        width="100%"
                        onChange={(value: string) => {
                            setStartDate(value)
                        }}
                        height="50px"
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <Input
                        label={endDateLabel}
                        placeholder={enterDob}
                        value={endDate}
                        onBlur={() => {
                            const error = validateDateOfBirth(endDate)
                            setEndDateError(error)
                        }}
                        error={endDateError}
                        isRequired
                        width="100%"
                        onChange={(value: string) => {
                            setEndDate(value)
                        }}
                        height="50px"
                    />
                </DropdownWrapper>
                <Button
                    onClick={() => {
                        dispatch(
                            fetchDayBookReport({
                                fromDate: startDate,
                                toDate: endDate,
                                type: feesType
                            })
                        )
                    }}
                >
                    {search}
                </Button>
            </FlexWrapper>
            <div>
                <TableWrapper>
                    <Table size="sm" responsive="sm">
                        <TableHeader>
                            <TableRow>
                                {tableHeader?.map((header, index) => (
                                    <th key={`header-${index}`}>{header}</th>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <tbody>
                            {dayBookReportList.map(
                                (
                                    {
                                        id,
                                        description = '',
                                        createdAt = '',
                                        userDetail: { studentName, regNo },
                                        paid
                                    },
                                    index
                                ) => {
                                    return (
                                        <TableRow key={`index-${index}`}>
                                            <td>{moment(createdAt).format('YYYY-MM-DD')}</td>
                                            <td>{id}</td>
                                            <td>{'-course-'}</td>
                                            <td>{'-Branch-'}</td>
                                            <td>{'-batch'}</td>
                                            <td>{studentName}</td>
                                            <td>{regNo}</td>
                                            <td>{description}</td>
                                            <td>{paid ? 'Yes' : 'No'}</td>
                                            <td>{cashier}</td>
                                        </TableRow>
                                    )
                                }
                            )}
                        </tbody>
                    </Table>
                </TableWrapper>
            </div>
        </PageWrapper>
    )
}

export default DayBookReport
