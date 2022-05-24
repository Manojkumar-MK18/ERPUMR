import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    Button,
    DropdownWrapper,
    EditableDropdown,
    FlexWrapper, Icon,
    PageWrapper,
    SectionTitle,
    TableHeader,
    TableRow,
    TableWrapper
} from "components"
import { getBranchDropdown, getInstituteDropdown } from "helpers"
import { ReactElement, useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import getCourses, { getBranchesByInstitute, getChildCourses, getInstitutes } from "redux/academic/api"
import { AssignLessonPlaneUser } from "redux/lesson/api"
import { LessonAssignPayload } from "redux/lesson/typing"
import { RootState } from "redux/store"
import { tableHeader } from "./const"

const AssignLesson = (): ReactElement => {
    const {
        acamedic: {
            courseList,
            instituteList,
            subjectlist,
            chapterList,
            topicList,
            branchList
        },
        lesson
    } = useSelector(
        (state: RootState) => ({
            acamedic: state.acamedic,
            lesson: state.lesson.lessonAssign as LessonAssignPayload
        }),
        shallowEqual
    )

    const dispatch = useDispatch()

    const [values, setValues] = useState(lesson || {})

    const institutes = instituteList ? getInstituteDropdown(instituteList) : []
    const branches = branchList ? getBranchDropdown(branchList) : []

    useEffect(() => {
        dispatch(getCourses())
        dispatch(getInstitutes())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log();

    return (
        <PageWrapper>
            <SectionTitle title="Assign Lesson" />
            <FlexWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={institutes}
                        isMultiChoice 
                        handleSelect={(item) => {
                            setValues({ ...values, institute: item?.name })
                            dispatch(getBranchesByInstitute({
                                coachingCentreId: item?.id,
                                courseId:''
                            }))
                        }}
                        placeholder="Select Institutes"
                        title="Institute"
                        isRequired
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={branches}
                        isMultiChoice
                        handleSelect={(item) => {
                            setValues({ ...values, institute: item?.name })
                        }}
                        placeholder="Select Branch"
                        title="Branch"
                        isRequired
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={courseList}
                        handleSelect={(item) => {
                            setValues({ ...values, lessonplanList: [{ course: item?.name }] })
                            dispatch(getChildCourses({
                                courseId: item?.id,
                                type: 'SUBJECT'
                            }))
                        }}
                        placeholder="Select Course"
                        title="Course"
                        isRequired
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={subjectlist}
                        handleSelect={(item) => {
                            setValues({ ...values, lessonplanList: [{ subject: item?.name }] })
                            dispatch(getChildCourses({
                                courseId: item?.id,
                                type: 'CHAPTER'
                            }))
                        }}
                        placeholder="Select Subject"
                        title="Subject"
                        isRequired
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={chapterList}
                        handleSelect={(item) => {
                            setValues({ ...values, lessonplanList: [{ chapter: item?.name }] })
                            dispatch(getChildCourses({
                                courseId: item?.id,
                                type: 'TOPIC'
                            }))
                        }}
                        placeholder="Select Chapter"
                        title="Chapter"
                        isRequired
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={topicList}
                        handleSelect={(item) => {
                            setValues({ ...values, lessonplanList: [{ topic: item?.name }] })
                        }}
                        placeholder="Select Topic"
                        title="Topic"
                        isRequired
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={[]}
                        handleSelect={() => { }}
                        placeholder="Select Faculty"
                        title="Faculty"
                        isRequired
                    />
                </DropdownWrapper>
                <Button
                    onClick={() => {
                        dispatch(AssignLessonPlaneUser({
                            institute: values?.institute,
                            lessonplanList: []
                        }))
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