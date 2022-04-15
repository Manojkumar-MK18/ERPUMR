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

const LeaveApplication = (): ReactElement => {

    const [fromDate, setFromDate] = useState<any>(new Date())
    const [toDate, setToDate] = useState<any>(new Date())
    const [fromTime, setFromTime] = useState<any>('')
    const [toTime, setToTime] = useState<any>('')
    const sameData = fromDate.getDate() == toDate.getDate()

    return (
        <PageWrapper>
            <SectionTitle title='Leave Application' />
            <FlexWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={[]}
                        title="Leave Module"
                        isRequired
                        placeholder={'Leave Module'}
                        handleSelect={() => { }}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={[]}
                        title="Leave Name"
                        isRequired
                        placeholder={'Leave Name'}
                        handleSelect={() => { }}
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
                {sameData &&
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
                        value=''
                        placeholder='Reason For Leave'
                        isRequired
                        label='Reason'
                        width='100%'
                    />
                </DropdownWrapper>
            </FlexWrapper>
            <FlexWrapper justifyContent='center' noPadding>
                <Button>Submit</Button>
            </FlexWrapper>
        </PageWrapper>
    )
}

export default LeaveApplication