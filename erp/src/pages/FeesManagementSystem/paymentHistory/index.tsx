import { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Button,
    DropdownWrapper,
    FlexWrapper,
    Icon,
    Input,
    PageWrapper,
    SectionTitle,
    TableHeader,
    TableRow,
    TableWrapper
} from 'components'
import strings from 'locale/en'
import { Table } from 'react-bootstrap'
import { tableHeader } from './const'
import StudentDetails from './subcomponent'

const PaymentHistory = (): ReactElement => {
    const {
        fms: {
            paymentHistory: { history, inputPlaceHolder }
        },
        button: { submit }
    } = strings
    return (
        <PageWrapper>
            <SectionTitle title={history} />
            <FlexWrapper>
                <DropdownWrapper>
                    <Input
                        value={''}
                        placeholder={inputPlaceHolder}
                        onChange={() => { }} 
                    />
                </DropdownWrapper>
                <Button style={{marginTop:'1px '}}>{submit}</Button>
            </FlexWrapper>
            <StudentDetails
                handleBatch={'Batch'}
                handleMobNum={'1234567890'}
                handleFatherName={'fatherName'}
                handleName={'prajnatva0021'}
                handleCourse={'Class11'}
                handleBranch={'Branch'}
            />
            <>
                <FlexWrapper justifyContent='end' noPadding>
                    <Button>
                        <FontAwesomeIcon
                            style={{ marginRight: '5px' }}
                            icon={['fas', 'print']}
                        />
                        Print
                    </Button>
                </FlexWrapper>
                <TableWrapper>
                    <Table size='sm' responsive="sm">
                        <TableHeader>
                            <TableRow>
                                {tableHeader.map((header, index) => (
                                    <th key={`payment-${index}`}>{header}</th>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <tbody>
                            <TableRow>
                                <td>SNo</td>
                                <td>ReceiptId</td>
                                <td>Paid Date</td>
                                <td>Mode Of Payment</td>
                                <td>Paid Amount</td>
                                <td>
                                    <Icon
                                        variant="outline-light"
                                    >
                                        <FontAwesomeIcon icon={['fas', 'file-download']} />
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

export default PaymentHistory