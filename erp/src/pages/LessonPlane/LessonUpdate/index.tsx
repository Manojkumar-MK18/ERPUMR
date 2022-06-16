/* eslint-disable no-unused-vars */
import { ReactElement, useEffect, useState } from 'react'
import {
    Button,
    DropdownWrapper,
    FlexWrapper,
    Icon,
    Input,
    PageWrapper,
    SectionTitle,
    TableFooter,
    TableHeader,
    TableRow,
    TableWrapper
} from 'components'
import { Table } from 'react-bootstrap'
import { tableHeader } from './const'
import { BootstrapModal } from './subcomponent'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LessonPlaneListApi, createLessonNameApi, getLessonplan } from 'redux/lesson/api'
import { RootState } from 'redux/store'
import { LessonPlaneList } from 'redux/lesson/typing'
import moment from 'moment'

const LessonUpdate = (): ReactElement => {

    const {
        lessonPlaneList,
        createLessonname,
        getLessonList
    } = useSelector(
        (state: RootState) => ({
            lessonPlaneList: state.lesson.lessonPlaneList,
            createLessonname: state.lesson.lessonName,
            getLessonList: state.lesson.getAllLessonPlane
        })
    )

    const {
        lessonplan = [],
        totalPages = 0,
        currentPage = 0
    } = lessonPlaneList || {}

    const dispatch = useDispatch()
    const [courseModal, showCourseModal] = useState('')
    const [values, setValues] = useState(createLessonname)
    // eslint-disable-next-line no-unused-vars
    const [lessonList, setLessonList] = useState<Array<LessonPlaneList>>([])
    const filteredList = lessonList.length > 0 ? lessonList : lessonplan

    useEffect(() => {
        dispatch(LessonPlaneListApi(1))
        dispatch(getLessonplan())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const canSave =
        !!values?.name

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
                            {getLessonList?.map((data, index) => (
                                data?.courseLessonDetailDaos.map((list) => {
                                    return (
                                        <TableRow key={index}>
                                            <td>{index - 6}</td> 
                                            <td>{moment(list?.assignedDate).format('YYYY-MM-DD')}</td>
                                            <td>{list?.course}</td>
                                            <td>{list?.subject}</td>
                                            <td>{list?.chapter}</td>
                                            <td>{list?.topic}</td>
                                            <td>{list?.userName}</td>
                                        </TableRow>
                                    )
                                })
                            ))}
                            {/* {getLessonList?.map((data, index) => {
                                const {
                                    name,
                                    courseLessonDetailDaos
                                } = data
                                return (
                                    <TableRow key={index}>
                                        <td>{index + 1}</td>
                                        <td>{name}</td>
                                        <td>{courseLessonDetailDaos.map((xx) => xx?.course)}</td>
                                        <td>{courseLessonDetailDaos.map((xx) => xx?.subject)}</td>
                                        <td>{courseLessonDetailDaos.map((xx) => xx?.chapter)}</td>
                                        <td>{courseLessonDetailDaos.map((xx) => xx?.topic)}</td>
                                        <td>{courseLessonDetailDaos.map((xx) => xx?.userName)}</td> 
                                    </TableRow>

                                )
                            })} */}
                        </tbody>
                    </Table>
                </TableWrapper>
            </>
            {courseModal &&
                <BootstrapModal
                    handleCancel={() => showCourseModal('')}
                    handleSubmit={() => {
                        showCourseModal('')
                        dispatch(createLessonNameApi(values))
                    }}
                    isLargeModal={true}
                    title="Lesson Name"
                    description=''
                    isDisabled={!canSave}
                >
                    <FlexWrapper width="100%" justifyContent="center">
                        <DropdownWrapper width='50%'>
                            <Input
                                value={values?.name}
                                label='Lesson Name'
                                isRequired
                                placeholder="Enter Lesson Name"
                                onChange={(value: string) => {
                                    setValues({ ...values, name: value })
                                }}
                            />
                        </DropdownWrapper>
                    </FlexWrapper>
                </BootstrapModal>
            }
        </PageWrapper>
    )
}

export default LessonUpdate