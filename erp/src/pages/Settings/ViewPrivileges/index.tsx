import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    EditableDropdown,
    FlexWrapper,
    PageWrapper,
    SectionTitle,
    Button,
    TableHeader,
    TableRow,
    TableWrapper,
    Icon
} from 'components'
import ROUTES from 'const/routes'
import { getInstituteDropdown } from 'helpers'
import { ReactElement, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getInstitutes } from 'redux/academic/api'
import { RootState } from 'redux/store'
import { tableHeader } from './const'

const ViewPrivileges = (): ReactElement => {

    const {
        acamedic: {
            instituteList
        }
    } = useSelector((state: RootState) => state, shallowEqual)

    const history = useHistory()
    const dispatch = useDispatch()
    const institutes = instituteList ? getInstituteDropdown(instituteList) : []

    useEffect(() => {
        dispatch(getInstitutes())
    })

    return (
        <PageWrapper>
            <SectionTitle title='View Privileges' />
            <FlexWrapper >
                <EditableDropdown
                    placeholder='Select Institute'
                    title='Select Role'
                    handleSelect={() => { }}
                    dropdownList={institutes}
                    width="25%"
                />
                <Button style={{ marginTop: "24px" }}>Search</Button>
            </FlexWrapper>
            <>
                <TableWrapper>
                    <Table size='sm' responsive="sm">
                        <TableHeader>
                            <TableRow>
                                {tableHeader.map((header, index) => (
                                    <th key={`fee-${index}`}>{header}</th>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <tbody>
                            <TableRow>
                                <td>1</td>
                                <td>Name</td>
                                <td>
                                    <Icon
                                        variant="outline-light"
                                        onClick={() => {
                                            history.push(ROUTES.VIEW_PRIVLEGES_ASSIGNED) 
                                        }}
                                    >
                                        <FontAwesomeIcon icon={['far', 'eye']} />
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

export default ViewPrivileges