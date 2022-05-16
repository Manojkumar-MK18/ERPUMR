import { DropdownWrapper, EditableDropdown, FlexWrapper, Input } from 'components'
import { DatePickerWrapper } from 'pages/subcomponents'
import { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getCourses, { getChildCourses } from 'redux/academic/api'
import { RootState } from 'redux/store'
import { AssignProps } from '../typing'
import DatePicker from 'react-datepicker'
import { DropdownListProps } from 'components/EditableDropdown/typings'
import { format } from 'date-fns'
import { DATE_FORMAT_MMDDYYYY } from 'const/dateFormat'

const AssignList = ({ values, setValues }: AssignProps): ReactElement => {
    const {
        courseList,
        subjectlist,
        chapterList,
        topicList
    } = useSelector((state: RootState) => ({
        courseList: state.acamedic.courseList,
        subjectlist: state.acamedic.subjectlist,
        chapterList: state.acamedic.chapterList,
        topicList: state.acamedic.topicList
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCourses())
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [])

    return (
        <FlexWrapper width="100%" justifyContent="center">
            <DropdownWrapper width='50%'>
                <EditableDropdown
                    placeholder='Select Course'
                    title='Select Course'
                    isRequired
                    dropdownList={courseList}
                    handleSelect={(item: DropdownListProps) => {
                        setValues({ ...values, course: item?.name })
                        dispatch(getChildCourses({
                            courseId: item?.id,
                            type: 'SUBJECT'
                        }))
                    }}
                />
            </DropdownWrapper>
            <DropdownWrapper width='50%'>
                <EditableDropdown
                    placeholder='Select Subject'
                    title='Select Subject'
                    isRequired
                    dropdownList={subjectlist}
                    handleSelect={(item: DropdownListProps) => {
                        setValues({ ...values, subject: item?.name })
                        dispatch(getChildCourses({
                            courseId: item?.id,
                            type: 'CHAPTER'
                        }))
                    }}
                />
            </DropdownWrapper>
            <DropdownWrapper width='50%'>
                <EditableDropdown
                    placeholder='Select Chapter'
                    title='Select Chapter'
                    isRequired
                    dropdownList={chapterList}
                    handleSelect={(item: DropdownListProps) => {
                        setValues({ ...values, chapter: item?.name })
                        dispatch(getChildCourses({
                            courseId: item?.id,
                            type: 'TOPIC'
                        }))
                    }}
                />
            </DropdownWrapper>
            <DropdownWrapper width='50%'>
                <EditableDropdown
                    placeholder='Select Topic'
                    title='Select Topic'
                    isRequired
                    dropdownList={topicList}
                    handleSelect={(item: DropdownListProps) => {
                        setValues({ ...values, topic: item?.name })
                    }}
                />
            </DropdownWrapper>
            <DropdownWrapper width='50%'>
                <DatePickerWrapper>
                    <DatePicker
                        selected={values?.date ? new Date(values?.date) : new Date()}
                        onSelect={(datees: Date) => {
                            setValues({
                                ...values,
                                date: datees ? format(datees, DATE_FORMAT_MMDDYYYY) : ''
                            })
                        }}
                        onChange={(datees: Date) => {
                            setValues({
                                ...values,
                                date: datees ? format(datees, DATE_FORMAT_MMDDYYYY) : '' 
                            })
                        }}
                        customInput={
                            <Input
                                value={values?.date}
                                label={'Select Assign Date'}
                                isRequired
                                suffix={['far', 'calendar']}
                            />
                        }
                    />
                </DatePickerWrapper>
            </DropdownWrapper>
        </FlexWrapper>
    )
}

export default AssignList