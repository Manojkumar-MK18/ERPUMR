import { ReactElement } from 'react'
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

const LeaveMaster = (): ReactElement => {

    const {
        hrms: {
            leaveMaster: {
                title,
            }
        }
    } = strings

    const history = useHistory()

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
                            <TableRow>
                                <td>1</td>
                                <td>Sick Leave</td>
                                <td>Descripton</td>
                                <td>YES</td>
                                <td>
                                    <LeaveAction
                                        handleDelete={() => { }}
                                        handleEdit={() => { }}
                                     />
                                </td>
                            </TableRow>
                        </tbody>
                    </Table>
                </TableWrapper>
            </FlexWrapper>
        </PageWrapper>
    )
}

export default LeaveMaster