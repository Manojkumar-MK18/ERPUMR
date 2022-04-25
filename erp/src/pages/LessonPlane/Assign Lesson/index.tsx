import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    Button,
    DropdownWrapper,
    EditableDropdown,
    FlexWrapper, Icon,
    PageWrapper,
    SectionTitle,
    TableHeader,
    TableRow,
    TableWrapper
} from "components"
import { ReactElement } from "react"
import { Table } from "react-bootstrap"
import { tableHeader } from "./const"

const AssignLesson = (): ReactElement => {
    return (
        <PageWrapper>
            <SectionTitle title="Assign Lesson" />
            <FlexWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={[]}
                        handleSelect={() => { }}
                        placeholder="Select Course"
                        title="Course"
                        isRequired
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={[]}
                        handleSelect={() => { }}
                        placeholder="Select Subject"
                        title="Subject"
                        isRequired
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={[]}
                        handleSelect={() => { }}
                        placeholder="Select Faculty"
                        title="Faculty"
                        isRequired
                    />
                </DropdownWrapper>
                <Button style={{ marginTop: "24px" }}>Assign</Button>
            </FlexWrapper>
            <>
                <TableWrapper>
                    <Table size="sm" responsive="sm">
                        <TableHeader>
                            <TableRow>
                                {tableHeader.map((header, index) => (
                                    <th key={`asssign-${index}`}>{header}</th>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <tbody>
                            <TableRow>
                                <td>1</td>
                                <td>Date</td>
                                <td>Course</td>
                                <td>Subject</td>
                                <td>Teacher</td>
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

export default AssignLesson