import { ReactElement, useEffect } from 'react'
import {
    Button,
    FlexWrapper,
    PageWrapper,
    SectionTitle,
    TableHeader,
    TableRow,
    TableWrapper
} from 'components'
import strings from 'locale/en'
import { Table } from 'react-bootstrap'
import { tableHeader } from './const'
import { useHistory } from 'react-router-dom'
import ROUTES from 'const/routes'
import { LeaveAction } from './subcomponents'
import { useDispatch, useSelector } from 'react-redux'
import { GetLeaveMasterListApi } from 'redux/Leave/api'
import { RootState } from 'redux/store'

const LeaveMaster = (): ReactElement => {
    const {
        getLeaveMasterList
    } = useSelector(
        (state: RootState) => ({
            getLeaveMasterList: state.leave.getLeaveMasterList
        })
    )

    const {
        hrms: {
            leaveMaster: {
                title,
            }
        }
    } = strings
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetLeaveMasterListApi())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PageWrapper>
            <SectionTitle title={title} />
            <FlexWrapper noPadding justifyContent='flex-end'>
                <Button
                    onClick={() => {
                        history.push(ROUTES.ADD_LEAVE)
                    }}
                >Add Leave</Button>
            </FlexWrapper>
            <FlexWrapper>
                <TableWrapper>
                    <Table size='sm' responsive="sm">
                        <TableHeader>
                            <TableRow>
                                {tableHeader?.map((header, index) => (
                                    <th key={`leavemaster-${index}`}>{header}</th>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <tbody>
                            {getLeaveMasterList.map((master, index) => {
                                const {
                                    leaveName,
                                    leaveDescription,
                                    encashable,
                                } = master
                                return (
                                    <TableRow key={`master-list-${index}`}>
                                        <td>{index + 1}</td>
                                        <td>{leaveName}</td>
                                        <td>{leaveDescription}</td>
                                        <td>{encashable}</td>
                                        <td>
                                            <LeaveAction
                                                handleDelete={() => { }}
                                                handleEdit={() => { }}
                                            />
                                        </td>
                                    </TableRow>
                                )
                            })}
                        </tbody>
                    </Table>
                </TableWrapper>
            </FlexWrapper>
        </PageWrapper>
    )
}

export default LeaveMaster