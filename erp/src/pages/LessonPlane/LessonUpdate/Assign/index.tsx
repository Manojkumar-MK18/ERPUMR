import { Button, DropdownWrapper, EditableDropdown, FlexWrapper, Input, PageWrapper, SectionTitle } from 'components'
import { DatePickerWrapper } from 'pages/subcomponents'
import { ReactElement, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getCourses, { getAdminList, getChildCourses } from 'redux/academic/api'
import { RootState } from 'redux/store'
import DatePicker from 'react-datepicker'
import { DropdownListProps } from 'components/EditableDropdown/typings'
import { format } from 'date-fns'
import { DATE_FORMAT_YYYYMMDD } from 'const/dateFormat'
import { initialValues, resetLessonValues } from '../const'
import getUserDropdown from 'helpers/getTeacherDropDown'
import { AdminType } from 'const'
import { assignLessonNameByTeacher } from 'redux/lesson/api'

const CreateLesson = (): ReactElement => {
    const {
        courseList,
        subjectlist,
        chapterList,
        topicList,
        teachers,
        courseId
    } = useSelector((state: RootState) => ({
        courseList: state.acamedic.courseList,
        subjectlist: state.acamedic.subjectlist,
        chapterList: state.acamedic.chapterList,
        topicList: state.acamedic.topicList,
        teachers: state.acamedic.admin?.adminList,
        courseId: state.lesson.lessonNameResponse.courseId
    }))

    const dispatch = useDispatch()
    const [resetValues, setResetValues] = useState(resetLessonValues)
    const [values, setValues] = useState(initialValues)

    const teacherList = teachers ? getUserDropdown(teachers) : []

    useEffect(() => {
        dispatch(getCourses())
        dispatch(getAdminList({ type: AdminType.TEACHER, }))
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [])

    return (
        <PageWrapper>
            <FlexWrapper noPadding>
                <SectionTitle title='Assign Lesson'/>
            </FlexWrapper>
            <FlexWrapper  >
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={teacherList}
                        handleSelect={(items) => {
                            setValues({ ...values, name: items?.name, userId: items?.id })
                        }}
                        placeholder="Select Faculty"
                        title="Faculty"
                        isRequired
                    />
                </DropdownWrapper>
                <DropdownWrapper  >
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
                            setResetValues({
                                ...resetLessonValues,
                                chapter: true,
                                subject: true,
                                topic: true,
                                date: true
                            })
                        }}
                        reset={resetValues?.course}
                    />
                </DropdownWrapper>
                <DropdownWrapper  >
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
                            setResetValues({
                                ...resetLessonValues,
                                chapter: true,
                                topic: true,
                                date: true
                            })
                        }}
                        reset={resetValues?.subject}
                    />
                </DropdownWrapper>
                <DropdownWrapper  >
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
                            setResetValues({
                                ...resetLessonValues,
                                topic: true,
                                date: true
                            })
                        }}
                        reset={resetValues?.chapter}
                    />
                </DropdownWrapper>
                <DropdownWrapper  >
                    <EditableDropdown
                        placeholder='Select Topic'
                        title='Select Topic'
                        isRequired
                        dropdownList={topicList}
                        handleSelect={(item: DropdownListProps) => {
                            setValues({ ...values, topic: item?.name })
                            setResetValues({
                                ...resetLessonValues,
                                date: true
                            })
                        }}
                        reset={resetValues?.topic}
                    />
                </DropdownWrapper>
                <DropdownWrapper >
                    <DatePickerWrapper>
                        <DatePicker
                            selected={values?.date ? new Date(values?.date) : new Date()}
                            onSelect={(datees: Date) => {
                                setValues({
                                    ...values,
                                    date: datees ? format(datees, DATE_FORMAT_YYYYMMDD) : ''
                                })
                            }}
                            onChange={(datees: Date) => {
                                setValues({
                                    ...values,
                                    date: datees ? format(datees, DATE_FORMAT_YYYYMMDD) : ''
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
            <FlexWrapper justifyContent='center'>
                <Button
                    onClick={() => {
                        dispatch(assignLessonNameByTeacher({
                            id: courseId,
                            courseLessonAssignDetailDao: [
                                {
                                    name: values?.name,
                                    date: values?.date,
                                    userId: values?.userId
                                }
                            ],
                            courseLessonDetailDao: [
                                {
                                    course: values?.course,
                                    chapter: values?.chapter,
                                    subject: values?.subject,
                                    topic: values?.topic
                                }
                            ]
                        })
                        )
                    }}
                >
                    Submit
                </Button>
            </FlexWrapper>
        </PageWrapper>
    )
}

export default CreateLesson