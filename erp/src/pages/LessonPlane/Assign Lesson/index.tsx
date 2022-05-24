import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    Button,
    DropdownWrapper,
    EditableDropdown,
    FlexWrapper, Icon,
    Input,
    PageWrapper,
    SectionTitle,
    TableHeader,
    TableRow,
    TableWrapper
} from "components"
import { DropdownListProps } from "components/EditableDropdown/typings"
import { AdminType } from "const"
import { getBranchDropdown, getInstituteDropdown } from "helpers"
import { DatePickerWrapper } from "pages/subcomponents"
import { ReactElement, useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import getCourses, { getAdminList, getBranches, getChildCourses, getInstitutes } from "redux/academic/api"
import { AssignLessonPlaneUser } from "redux/lesson/api"
import { LessonAssignPayload } from "redux/lesson/typing"
import { RootState } from "redux/store"
import { InitialState, resetAllValues, tableHeader } from "./const"
import DatePicker from 'react-datepicker'
import { format } from 'date-fns'
import { DATE_FORMAT_YYYYMMDD } from 'const/dateFormat'
import getUserDropdown from "helpers/getTeacherDropDown"

const AssignLesson = (): ReactElement => {
    const {
        acamedic: {
            courseList,
            instituteList,
            subjectlist,
            chapterList,
            topicList,
            branchList,
        },
        lesson,
        statusList,
        teachers,
    } = useSelector(
        (state: RootState) => ({
            acamedic: state.acamedic,
            lesson: state.lesson.lessonAssign as LessonAssignPayload,
            statusList: state.lesson.statusList,
            teachers: state.acamedic.admin?.adminList
        }),
        shallowEqual
    )

    const dispatch = useDispatch()

    const [values, setValues] = useState(lesson || {})
    const [valuesLessonList, setLessonList] = useState(InitialState)
    const [resetValues, setresetValues] = useState(resetAllValues)

    const clearValues = () => {
        setresetValues({
            institute: true,
            course: true,
            subject: true,
            chapter: true,
            topic: true,
            assignedDate: true,
            status: true
        })
        setLessonList(InitialState)
    }

    const institutes = instituteList ? getInstituteDropdown(instituteList) : []
    const branches = branchList ? getBranchDropdown(branchList) : []
    const teacherList = teachers ? getUserDropdown(teachers) : []

    useEffect(() => {
        dispatch(getCourses())
        dispatch(getInstitutes())
        dispatch(getAdminList({ type: AdminType.TEACHER, }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PageWrapper>
            <SectionTitle title="Assign Lesson" />
            <FlexWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={institutes}
                        handleSelect={(item) => {
                            setValues({ ...values, institute: item?.name })
                            dispatch(getBranches({
                                coachingCentreId: item?.id,
                                type: AdminType.INSTITUTEADMIN
                            }))
                            setresetValues({
                                ...resetAllValues,
                                subject: true,
                                course: true,
                                chapter: true,
                                topic: true,
                                assignedDate: true,
                                status: true,
                            })
                        }}
                        placeholder="Select Institutes"
                        title="Institute"
                        isRequired
                        reset={resetValues?.institute}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={branches}
                        isMultiChoice
                        handleMultiSelect={(items) => {
                            const ids = items.map((item: DropdownListProps) => item?.name)
                            setValues({ ...values, listofBranches: ids })
                        }}
                        placeholder="Select Branch"
                        title="Branch"
                        isRequired
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={teacherList}
                        isMultiChoice
                        handleMultiSelect={(items) => {
                            const ids = items.map((item: DropdownListProps) => item?.name)
                            setValues({ ...values, listOfFaculties: ids })
                        }}
                        placeholder="Select Faculty"
                        title="Faculty"
                        isRequired
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={courseList}
                        handleSelect={(item) => {
                            setLessonList({
                                ...valuesLessonList, course: item.name
                            })
                            dispatch(getChildCourses({
                                courseId: item?.id,
                                type: 'SUBJECT'
                            }))
                            setresetValues({
                                ...resetAllValues,
                                subject: true,
                                chapter: true,
                                topic: true,
                                assignedDate: true,
                                status: true,
                            })
                        }}
                        placeholder="Select Course"
                        title="Course"
                        isRequired
                        reset={resetValues?.course}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={subjectlist}
                        handleSelect={(item) => {
                            setLessonList({
                                ...valuesLessonList, subject: item.name
                            })
                            dispatch(getChildCourses({
                                courseId: item?.id,
                                type: 'CHAPTER'
                            }))
                            setresetValues({
                                ...resetAllValues,
                                chapter: true,
                                topic: true,
                                status: true,
                                assignedDate: true
                            })
                        }}
                        placeholder="Select Subject"
                        title="Subject"
                        isRequired
                        reset={resetValues?.subject}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={chapterList}
                        handleSelect={(item) => {
                            setLessonList({
                                ...valuesLessonList, chapter: item.name
                            })
                            dispatch(getChildCourses({
                                courseId: item?.id,
                                type: 'TOPIC'
                            }))
                            setresetValues({
                                ...resetAllValues,
                                status: true,
                                topic: true,
                                assignedDate: true
                            })
                        }}
                        placeholder="Select Chapter"
                        reset={resetValues?.chapter}
                        title="Chapter"
                        isRequired
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={topicList}
                        handleSelect={(item) => {
                            setLessonList({
                                ...valuesLessonList, topic: item.name
                            })
                            setresetValues({
                                ...resetAllValues,
                                status: true,
                                assignedDate: true
                            })
                        }}
                        placeholder="Select Topic"
                        reset={resetValues?.topic}
                        title="Topic"
                        isRequired
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <DatePickerWrapper>
                        <DatePicker
                            selected={valuesLessonList?.assignedDate ? new Date(valuesLessonList?.assignedDate) : new Date()}
                            onSelect={(datees: Date) => {
                                setLessonList({
                                    ...valuesLessonList,
                                    assignedDate: datees ? format(datees, DATE_FORMAT_YYYYMMDD) : ''
                                })
                            }}
                            onChange={(datees: Date) => {
                                setLessonList({
                                    ...valuesLessonList,
                                    assignedDate: datees ? format(datees, DATE_FORMAT_YYYYMMDD) : ''
                                })
                            }}
                            customInput={
                                <Input
                                    value={valuesLessonList?.assignedDate}
                                    label={'Assign Date'}
                                    isRequired
                                    suffix={['far', 'calendar']}
                                />
                            }
                        />
                    </DatePickerWrapper>
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={statusList}
                        handleSelect={(item) => {
                            setValues({ ...values, status: item?.name })
                            setresetValues({
                                ...resetAllValues,
                                assignedDate: true
                            })
                        }}
                        placeholder="Select Status"
                        title="Status"
                        isRequired
                        reset={resetValues?.status}
                    />
                </DropdownWrapper>
                <Button
                    onClick={() => {
                        dispatch(AssignLessonPlaneUser({
                            institute: values?.institute,
                            listofBranches: values?.listofBranches,
                            listOfFaculties: values?.listOfFaculties,
                            lessonplanList: [
                                {
                                    course: valuesLessonList?.course,
                                    subject: valuesLessonList?.subject,
                                    chapter: valuesLessonList?.chapter,
                                    topic: valuesLessonList?.topic,
                                    assignedDate: valuesLessonList?.assignedDate
                                }
                            ],
                            status: values?.status
                        }))
                        clearValues()
                    }}
                    style={{ marginTop: "24px" }}>Assign</Button>
            </FlexWrapper>
            <>
                <TableWrapper>
                    <Table size="sm" responsive="sm">
                        <TableHeader>
                            <TableRow>
                                {tableHeader.map((header, index) => (
                                    <th key={`asssign-${index}`}>{header}</th>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <tbody>
                            <TableRow>
                                <td>1</td>
                                <td>Date</td>
                                <td>Course</td>
                                <td>Subject</td>
                                <td>Teacher</td>
                                <td>
                                    <Icon>
                                        <FontAwesomeIcon icon={['far', 'edit']} />
                                    </Icon>
                                </td>
                            </TableRow>
                        </tbody>
                    </Table>
                </TableWrapper>
            </>
        </PageWrapper>
    )
}

export default AssignLesson