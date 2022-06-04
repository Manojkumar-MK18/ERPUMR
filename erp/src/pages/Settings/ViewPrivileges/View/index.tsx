import { PageWrapper, SectionTitle, TableHeader, TableRow, TableWrapper } from 'components'
import { TableDisplayWrapper } from '../../AddRole/subcomponent'
import { ReactElement } from 'react'
import { Form, Table } from 'react-bootstrap'

export const ViewPrivilegesAssigned = (): ReactElement => {
    return (
        <PageWrapper>
            <SectionTitle title='Privileges' />
            <>
                <>
                    <TableDisplayWrapper>
                        <>
                            <TableWrapper>
                                <Table size="sm" responsive="sm">
                                    <TableHeader>
                                        <td>Menu</td>
                                        <td>Privileges</td>
                                    </TableHeader>
                                    <tbody>
                                        <TableRow >
                                            <td>Home</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Settings</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Add Role</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Add User Role</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Add Privileges</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>View Privileges</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Admissions</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow><TableRow >
                                            <td>Student Registration</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>FMS</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Fee Description</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Fee Master</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Fee Receipt</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Student Concession</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Change Student Fee</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Finance</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Group Category</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>

                                        <TableRow >
                                            <td>Group</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Sub-Group</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                    </tbody>
                                </Table>
                            </TableWrapper>
                            <TableWrapper>
                                <Table size="sm" responsive="sm">
                                    <TableHeader>
                                        <td>Menu</td>
                                        <td>Privileges</td>
                                    </TableHeader>
                                    <tbody>
                                        <TableRow >
                                            <td>Bank Master</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Add Receipt</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Ledger List</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Bill Payment</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Application Receipt</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Payment</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Contra</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Journal</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Balance Sheet</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>HRMS</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Department</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Designation</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Staff Registration</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Leave Master</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Leave Application</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Leave Approval</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>
                                        <TableRow >
                                            <td>Leave Status</td>
                                            <td><Form.Check></Form.Check></td>
                                        </TableRow>

                                    </tbody>
                                </Table>
                            </TableWrapper>
                        </>
                    </TableDisplayWrapper>
                </>
            </>
        </PageWrapper>
    )
}

export default ViewPrivilegesAssigned
