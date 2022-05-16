import { ReactElement } from "react"
import {
    DropdownWrapper,
    EditableDropdown,
    FlexWrapper,
    Icon,
    PageWrapper,
    SectionTitle,
    TableHeader,
    TableRow,
    TableWrapper,
    Button
} from "components"
import { Table } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { tableHeader } from "./const"
import { ActionButton } from "pages/HumanResources/LeaveApproval/subcomponents"

const LessonStatus = (): ReactElement => {
    return (
        <PageWrapper>
            <SectionTitle title="Lesson Status" />
            <FlexWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={[]}
                        placeholder='Select Faculty'
                        title="Faculty"
                        handleSelect={() => { }}
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
                            <TableRow>
                                <td>Date</td>
                                <td>Topic</td>
                                <td>
                                    <ActionButton
                                        variant="outline-secondary"
                                        onClick={() => { }}
                                    >
                                        Completed
                                    </ActionButton>
                                    <ActionButton
                                        variant="outline-danger"
                                        onClick={() => { }}
                                    >
                                        NotCompleted
                                    </ActionButton>
                                </td>
                                <td>
                                    <Icon>
                                        <FontAwesomeIcon icon={['far', 'edit']} />
                                    </Icon>
                                </td>
                            </TableRow>
                        </tbody>
                    </Table>
                </TableWrapper>
            </>
        </PageWrapper>
    )
}

export default LessonStatus