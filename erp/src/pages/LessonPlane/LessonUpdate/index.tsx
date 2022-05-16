import { ReactElement, useEffect, useState } from 'react'
import {
    Button,
    FlexWrapper,
    Icon,
    PageWrapper,
    SectionTitle,
    TableFooter,
    TableHeader,
    TableRow,
    TableWrapper
} from 'components'
import { Table } from 'react-bootstrap'
import { initialModalValues, tableHeader } from './const'
import { BootstrapModal } from './subcomponent'
import { useDispatch, useSelector } from 'react-redux'
import AssignList from './Assign'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AssignLessonPalnApi, LessonPlaneListApi } from 'redux/lesson/api'
import { RootState } from 'redux/store'
import { LessonPlaneList } from 'redux/lesson/typing'

const LessonUpdate = (): ReactElement => {

    const {
        lessonPlaneList
    } = useSelector(
        (state: RootState) => ({
            lessonPlaneList: state.lesson.lessonPlaneList
        })
    )

    const {
        lessonplan = [],
        totalPages = 0,
        currentPage = 0
    } = lessonPlaneList || {}

    const dispatch = useDispatch()
    const [courseModal, showCourseModal] = useState('')
    const [values, setValues] = useState(initialModalValues)
    // eslint-disable-next-line no-unused-vars
    const [lessonList, setLessonList] = useState<Array<LessonPlaneList>>([])
    const filteredList = lessonList.length > 0 ? lessonList : lessonplan

    useEffect(() => {
        dispatch(LessonPlaneListApi(1))
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
                            {filteredList?.map((
                                {
                                    assignedDate,
                                    chapter,
                                    course,
                                    topic,
                                    subject
                                },
                                index
                            ) => {
                                <TableRow key={`lesson-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{assignedDate}</td>
                                    <td>{course}</td>
                                    <td>{chapter}</td>
                                    <td>{topic}</td>
                                    <td>{subject}</td>
                                    <td>
                                        <Icon>
                                            <FontAwesomeIcon icon={['far', 'edit']} />
                                        </Icon>
                                    </td>
                                </TableRow>
                            })}
                        </tbody>
                    </Table>
                    <TableFooter
                        currentPage={currentPage}
                        totalPages={totalPages}
                        handleNext={() => {
                            dispatch(LessonPlaneListApi(currentPage + 1))
                        }}
                        handlePrevious={() => {
                            dispatch(LessonPlaneListApi(currentPage - 1))
                        }}
                    />
                </TableWrapper>
            </>
            {courseModal &&
                <BootstrapModal
                    handleCancel={() => showCourseModal('')}
                    handleSubmit={() => {
                        showCourseModal('')
                        dispatch(AssignLessonPalnApi({
                            course: values?.course,
                            subject: values?.subject,
                            chapter: values?.chapter,
                            topic: values?.topic,
                            assignedDate: values?.date
                        }))
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