import {
    Button,
    EditableDropdown,
    FlexWrapper,
    PageWrapper,
    SectionTitle,
    TableHeader,
    TableRow,
} from "../../../components"
import { ReactElement, useState } from "react"
import { TableWrapper } from '../../../components/PrivilegesTable'
import { Form, Table } from "react-bootstrap"
import { CheckBoxWrapper, TableDisplayWrapper } from "./subcomponent"

const AddPrivileges = (): ReactElement => {
    // eslint-disable-next-line no-unused-vars
    const [isSelectAll, setIsSelectAll] = useState(false)
    return (
        <PageWrapper>
            <SectionTitle title="Add Privileges" />
            <FlexWrapper>
                <EditableDropdown
                    dropdownList={[]}
                    title="Admin"
                    width="30%"
                    placeholder={"Select Admin"}
                    handleSelect={() => { }}
                />
                <Button style={{ marginBottom: "0px" }}>Submit</Button>
            </FlexWrapper>
            <>
                <CheckBoxWrapper noPadding justifyContent="space-between">
                    <SectionTitle title="Select Priviliges" />
                    <div id="check">
                        <Form.Check onClick={() => setIsSelectAll(!isSelectAll)}></Form.Check>
                        {isSelectAll ? 'DeSelect All' : 'Select All'}
                    </div>
                </CheckBoxWrapper>
                < TableDisplayWrapper>
                    <TableWrapper>
                        <Table size="sm" responsive="sm">
                            <TableHeader>
                                <td>Menu</td>
                                <td>Privileges</td>
                            </TableHeader>
                            <tbody>
                                <TableRow >
                                    <td>Home</td>
                                    <td><Form.Check checked={!isSelectAll}></Form.Check></td>
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
                                    <td>Sub-Group</td>
                                    <td><Form.Check></Form.Check></td>
                                </TableRow>
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
                                    <td>Leave Application</td>
                                    <td><Form.Check></Form.Check></td>
                                </TableRow>

                            </tbody>
                        </Table>
                    </TableWrapper>

                </TableDisplayWrapper>
            </>
            <CheckBoxWrapper noPadding  justifyContent="start">
                <Button>Update</Button>
            </CheckBoxWrapper>
        </PageWrapper>
    )
}

export default AddPrivileges