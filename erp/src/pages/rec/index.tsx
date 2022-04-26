/* eslint-disable no-unused-vars */
import { Button, FlexWrapper, PageWrapper, SectionTitle, TableHeader, TableRow } from 'components'
import { TableWrapper } from 'components/PrivilegesTable'
import { ReactElement } from 'react'
import { Table } from 'react-bootstrap'
import { tableHeader, tableHeaderMain } from './const'
import { FeeAction, FeeFooter } from './subcomponent'

const Rec = (): ReactElement => {
    return (
        <PageWrapper>
            <FlexWrapper justifyContent='center'>
                <SectionTitle title='Fee Receipt' />
            </FlexWrapper>
            <FeeAction
                handleYear={'2001'}
                handleClass={'11th NEET'}
                handleName={'Tamil'}
                handleAdmNo={'0427'}
                handleFatherName={'Vijay'}
                handleMobileNo={'9845372890'}
            />
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
                        <td>DER345</td>
                        <td>Cash</td>
                        <td>22/22/2222</td>
                    </tbody>
                </Table>
            </TableWrapper>
            <>
                <TableWrapper>
                    <Table size='sm' responsive="sm">
                        <TableHeader>
                            <TableRow>
                                {tableHeaderMain.map((header, index) => (
                                    <th key={`fee-${index}`}>{header}</th>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <tbody>
                            <td>1</td>
                            <td>Amouont Fees</td>
                            <td>₹ 100</td>
                        </tbody>
                    </Table>
                </TableWrapper>
                <FeeFooter
                    handleAmount={45000}
                    handleConcession={0}
                    handlePaidAmount={12000}
                    handleDue={33000}
                />
            </>
        </PageWrapper>
    )
}

export default Rec