import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    DropdownWrapper,
    FlexWrapper,
    Input,
    PageWrapper,
    SectionTitle,
    Button,
    EditableDropdown,
    TableFooter,
    TableHeader,
    TableRow,
    TableWrapper,
    Icon
} from "components"
import strings from "locale/en"
import { ReactElement } from "react"
import { Table } from "react-bootstrap"
import { tableHeader } from "./const"


const AddRoleUser = (): ReactElement => {
    const {
        roleUser: {
            title,
            userName,
            enterPassword,
            enterUserName,
            password,
            admin,
            adminPalceholder
        },
        button: {
            save
        }
    } = strings
    return (
        <PageWrapper>
            <SectionTitle title={title} />
            <FlexWrapper >
                <DropdownWrapper>
                    <EditableDropdown
                        title={admin}
                        dropdownList={[]}
                        placeholder={adminPalceholder}
                        handleSelect={(value: string) => {
                            console.log(value)
                        }}
                        onBlur={() => { }}
                        error={''}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <Input
                        label={userName}
                        placeholder={enterUserName}
                        value={''}
                        onBlur={() => { }}
                        error={''}
                        onChange={(value: string) => {
                            console.log(value)
                        }}
                    height="50px"
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <Input
                        label={password}
                        placeholder={enterPassword}
                        value={''}
                        onBlur={() => { }}
                        error={''}
                        onChange={(value: string) => {
                            console.log(value)
                        }}
                        height="50px"
                    />
                </DropdownWrapper>
                <Button style={{ marginTop: "24px" }}>{save}</Button>
            </FlexWrapper>
            <TableWrapper>
                <Table size="sm" responsive="sm">
                    <TableHeader>
                        <TableRow>
                            {tableHeader.map((header, index) => (
                                <th key={`user-role-${index}`}>{header}</th>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <tbody>
                        <TableRow>
                            <td>1</td>
                            <td>UserName</td>
                            <td>Password</td>
                            <td>Role ID</td>
                            <td>
                                <Icon
                                    variant="outline-light"
                                    onClick={() => { }}
                                >
                                    <FontAwesomeIcon icon={['far', 'trash-alt']} />
                                </Icon>
                            </td>
                        </TableRow>
                    </tbody>
                </Table>
                <TableFooter
                    currentPage={0}
                    totalPages={0}
                    handlePrevious={() => { }}
                    handleNext={() => { }}
                />
            </TableWrapper>
        </PageWrapper>
    )
}

export default AddRoleUser