import { ReactElement, useEffect, useState } from "react"
import {
    DropdownWrapper,
    EditableDropdown,
    FlexWrapper,
    PageWrapper,
    SectionTitle,
    TableHeader,
    TableRow,
    TableWrapper,
    Button
} from "components"
import { Table } from "react-bootstrap"
import { initialValues, tableHeader } from "./const"
import { useDispatch, useSelector } from "react-redux"
import { getLessonbyUserId } from "redux/lesson/api"
import { RootState } from "redux/store"
import getUserDropdown from "helpers/getTeacherDropDown"
import { getAdminList } from "redux/academic/api"
import AdminType from "const/admin"
import moment from "moment"

const LessonStatus = (): ReactElement => {
    const {
        teachers,
        getLessonResponsebyUserId
    } = useSelector(
        (state: RootState) => ({
            teachers: state.acamedic.admin?.adminList,
            getLessonResponsebyUserId: state.lesson.getLessonResponsebyUserId
        })
    )

    const dispatch = useDispatch()

    const [values, setValues] = useState(initialValues)
    const teacherList = teachers ? getUserDropdown(teachers) : []

    useEffect(() => {
        dispatch(getAdminList({ type: AdminType.TEACHER }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PageWrapper>
            <SectionTitle title="Lesson Status" />
            <FlexWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={teacherList}
                        placeholder='Select Faculty'
                        title="Faculty"
                        handleSelect={(item) => {
                            setValues({
                                ...values,
                                id: item?.id
                            })
                            dispatch(getLessonbyUserId(item?.id))
                        }}
                    />
                </DropdownWrapper>
                <Button
                    style={{ marginTop: "24px" }}>
                    Submit
                </Button>
            </FlexWrapper>
            <>
                <TableWrapper>
                    <Table size="sm" responsive="sm">
                        <TableHeader>
                            <TableRow>
                                {tableHeader.map((header, index) => (
                                    <th key={`status-${index}`}>{header}</th>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <tbody>
                            {getLessonResponsebyUserId.map((data, index) => (
                                <TableRow key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data?.assignedDate ? moment(data?.assignedDate).format('DD-MM-yyyy') : '-'}</td>
                                    <td>{data?.course}</td>
                                    <td>{data?.subject}</td>
                                    <td>{data?.chapter}</td>
                                    <td>{data?.topic}</td>
                                    <td>{data?.status}</td>
                                    <td>{data?.completionDate ? moment(data?.completionDate).format('DD-MM-yyyy') : '-'}</td>
                                </TableRow>
                            ))}
                        </tbody>
                    </Table>
                </TableWrapper>
            </>
        </PageWrapper>
    )
}

export default LessonStatus