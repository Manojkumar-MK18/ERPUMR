import { ReactElement, useEffect, useState } from 'react'
import {
    Button,
    EditableDropdown,
    FlexWrapper,
    PageWrapper,
    SectionTitle,
    TableHeader,
    TableRow,
    TableWrapper
} from 'components'
import { Table } from 'react-bootstrap'
import { tableHeader } from './const'
import { BootstrapModal } from './subcomponent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import getCourses from 'redux/academic/api'
import { useHistory } from 'react-router-dom'
import ROUTES from 'const/routes'

const LessonUpdate = (): ReactElement => {
    const {
        courseList
    } = useSelector((state: RootState) => ({
        courseList: state.acamedic.courseList
    }))

    const history = useHistory()
    const dispatch = useDispatch()
    const [courseModal, showCourseModal] = useState(false)

    useEffect(() => {
        dispatch(getCourses())
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [])

    return (
        <PageWrapper>
            <SectionTitle title='Lesson Updates' />
            <FlexWrapper justifyContent='end'>
                <Button
                    onClick={() => {
                        showCourseModal(true)
                    }}
                >Add Course</Button>
            </FlexWrapper>
            <>
                <TableWrapper>
                    <Table size='sm' responsive="sm">
                        <TableHeader>
                            <TableRow>
                                {tableHeader.map((header, index) => (
                                    <th key={`lesson-${index}`}>{header}</th>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <tbody>
                            <TableRow>
                                <td>1</td>
                                <td>Course</td>
                                <td>Subject</td>
                                <td>Topic</td>
                                <td>
                                    <Button
                                        onClick={() => {
                                            history.push(ROUTES.ASSIGN_LESSONUPDATES)
                                        }}
                                    >
                                        Assign Chapter
                                    </Button>
                                </td>
                            </TableRow>
                        </tbody>
                    </Table>
                </TableWrapper>
            </>
            {courseModal &&
                <BootstrapModal
                    handleCancel={() => showCourseModal(false)}
                    handleSubmit={() => {
                        showCourseModal(false)
                    }}
                    isLargeModal={false}
                    title="Select Course & Subject"
                    description=''
                >
                    <PageWrapper>

                        <EditableDropdown
                            placeholder='Select Course'
                            title='Select Course'
                            isRequired
                            dropdownList={courseList}
                            handleSelect={() => { }} 
                        />

                        <EditableDropdown
                            placeholder='Select Course'
                            title='Select Course'
                            isRequired
                            dropdownList={[]}
                            handleSelect={() => { }}
                        />

                    </PageWrapper>
                </BootstrapModal>
            }
        </PageWrapper>
    )
}

export default LessonUpdate