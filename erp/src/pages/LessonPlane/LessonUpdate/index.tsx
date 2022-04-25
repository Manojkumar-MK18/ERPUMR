import { ReactElement, useEffect, useState } from 'react'
import {
    Button,
    FlexWrapper,
    PageWrapper,
    SectionTitle,
    TableHeader,
    TableRow,
    TableWrapper
} from 'components'
import { Table } from 'react-bootstrap'
import { initialModalValues, tableHeader } from './const'
import { BootstrapModal } from './subcomponent'
import { useDispatch } from 'react-redux'
import getCourses from 'redux/academic/api'
import AssignList from './Assign'

const LessonUpdate = (): ReactElement => {

    const dispatch = useDispatch()
    const [courseModal, showCourseModal] = useState('')
    const [values, setValues] = useState(initialModalValues)

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
                        showCourseModal('t')
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
                                <td>Chapter</td>
                                <td>Topic</td>
                            </TableRow>
                        </tbody>
                    </Table>
                </TableWrapper>
            </>
            {courseModal &&
                <BootstrapModal
                    handleCancel={() => showCourseModal('')}
                    handleSubmit={() => {
                        showCourseModal('')
                    }}
                    isLargeModal={true}
                    title="Select Course & Subject"
                    description=''
                >
                    <AssignList values={values} setValues={setValues} />
                </BootstrapModal>
            }
        </PageWrapper>
    )
}

export default LessonUpdate