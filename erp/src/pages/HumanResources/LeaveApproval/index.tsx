import {  FlexWrapper, PageWrapper, SectionTitle, TableHeader, TableRow, TableWrapper } from 'components'
import { ReactElement } from 'react'
import { Table } from 'react-bootstrap'
import { tableHeader } from './const'
import { ActionButton } from './subcomponents'

const LeaveApproval = (): ReactElement => {
    
    return (
        <PageWrapper>
            <SectionTitle title='Leave Approval' />
            <FlexWrapper>
                <TableWrapper>
                    <Table size='sm' responsive="sm">
                        <TableHeader>
                            <TableRow>
                                {tableHeader.map((header, index) => (
                                    <th key={`approval-${index}`}>{header}</th>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <tbody>
                            <TableRow>
                                <td>1</td>
                                <td>Encashable</td>
                                <td>Leave</td>
                                <td>Description</td>
                                <td>
                                    <ActionButton
                                        variant="outline-secondary"
                                        onClick={() => { }}
                                    >
                                        Approval
                                    </ActionButton>
                                    <ActionButton
                                        variant="outline-danger"
                                        onClick={() => { }}
                                    >
                                        Reject
                                    </ActionButton>
                                </td>
                            </TableRow>
                        </tbody>
                    </Table>
                </TableWrapper>
            </FlexWrapper> 
        </PageWrapper>
    )
}

export default LeaveApproval