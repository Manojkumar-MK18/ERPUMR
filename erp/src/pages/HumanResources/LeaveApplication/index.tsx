import { ReactElement, useState } from 'react'
import {
    Button,
    DropdownWrapper,
    EditableDropdown,
    FlexWrapper,
    Input,
    PageWrapper,
    SectionTitle
} from 'components'
import { DatePickerWrapper } from 'pages/subcomponents'
import DatePicker from 'react-datepicker'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { applyLeaveApi } from 'redux/Leave/api'
import format from 'date-fns/format'
import {
    DATE_FORMAT_YYYYMMDD,
} from '../../../const/dateFormat'

const LeaveApplication = (): ReactElement => {
    const {
        leaveData,
        applyLeaveData
    } = useSelector(
        (state: RootState) => ({
            leaveData: state.leave.leaveType,
            applyLeaveData: state.leave.applyLeaveDetails
        })
    )

    const [fromDate, setFromDate] = useState<any>(new Date())
    const [toDate, setToDate] = useState<any>(new Date())
    const [fromTime, setFromTime] = useState<any>('')
    const [toTime, setToTime] = useState<any>('')
    const dispatch = useDispatch()

    const [values, setValues] = useState(applyLeaveData)

    return (
        <PageWrapper>
            <SectionTitle title='Leave Application' />
            <FlexWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={leaveData}
                        title="Leave Type"
                        isRequired
                        placeholder={'Select Leave Type'}
                        handleSelect={(value) => {
                            setValues({ ...values, leaveType: value.name })
                        }}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={[
                            { id: '01', name: 'sick' }
                        ]}
                        title="Leave Name"
                        isRequired
                        placeholder={'Leave Name'}
                        handleSelect={(value) => {
                            setValues({ ...values, leaveName: value.name })
                        }}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <DatePickerWrapper>
                        <DatePicker
                            selected={fromDate}
                            onSelect={(date) => setFromDate(date)}
                            onChange={(date) => setFromDate(date)}
                            placeholderText={'From Dtae'}
                            customInput={
                                <Input
                                    label={'From Date'}
                                    value={fromDate}
                                    isRequired
                                    inputType="text"
                                    placeholder={'From Date'}
                                    onChange={(date) => setFromDate(date)}
                                    suffix={['far', 'calendar']}
                                />
                            }
                        />
                    </DatePickerWrapper>
                </DropdownWrapper>
                <DropdownWrapper>
                    <DatePickerWrapper>
                        <DatePicker
                            selected={toDate}
                            onSelect={(date) => setToDate(date)}
                            onChange={(date) => setToDate(date)}
                            placeholderText={'From Dtae'}
                            customInput={
                                <Input
                                    label={'To Date'}
                                    isRequired
                                    value={toDate}
                                    inputType="text"
                                    placeholder={'To Date'}
                                    onChange={(date) => {
                                        setToDate(date)
                                    }}
                                    suffix={['far', 'calendar']}
                                />
                            }
                        />
                    </DatePickerWrapper>
                </DropdownWrapper>
                {fromDate.getDate() == toDate.getDate() &&
                    <>
                        <DropdownWrapper>
                            <DatePicker
                                selected={fromTime}
                                onSelect={(time) => setFromTime(time)}
                                onChange={(time) => setFromTime(time)}
                                showTimeSelectOnly
                                showTimeSelect
                                timeIntervals={30}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                popperPlacement="bottom"
                                placeholderText={'FromTiming'}
                                customInput={<Input
                                    value={fromTime}
                                    inputType="text"
                                    label={'FromTiming'}
                                    placeholder={'FromTiming'}
                                    onChange={(date) => setFromDate(date)}
                                    suffix={['far', 'clock']} />} />
                        </DropdownWrapper><DropdownWrapper>
                            <DatePicker
                                selected={toTime}
                                onSelect={(time) => setToTime(time)}
                                onChange={(time) => setToTime(time)}
                                showTimeSelectOnly
                                showTimeSelect
                                timeIntervals={30}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                popperPlacement="bottom"
                                placeholderText={'To Timing'}
                                customInput={<Input
                                    value={toTime}
                                    inputType="text"
                                    label={'To Timing'}
                                    placeholder={'To Timing'}
                                    onChange={(date) => setToDate(date)}
                                    suffix={['far', 'clock']} />} />
                        </DropdownWrapper></>
                }
                <DropdownWrapper>
                    <Input
                        value={values?.remarks}
                        placeholder='Reason For Leave'
                        isRequired
                        label='Reason'
                        width='100%'
                        onChange={(value: string) => {
                            setValues({ ...values, remarks: value })
                        }}
                    />
                </DropdownWrapper>
            </FlexWrapper>
            <FlexWrapper justifyContent='center' noPadding>
                <Button
                    onClick={() => {
                        dispatch(applyLeaveApi({
                            ...values,
                            fromDate: format(fromDate, DATE_FORMAT_YYYYMMDD),
                            toDate: format(toDate, DATE_FORMAT_YYYYMMDD),
                            dayStatus: 'FullDay'
                        }))
                    }}
                >Submit</Button>
            </FlexWrapper>
        </PageWrapper>
    )
}

export default LeaveApplication