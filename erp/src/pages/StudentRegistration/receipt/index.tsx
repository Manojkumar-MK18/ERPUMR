import { FlexWrapper, PageWrapper, SectionTitle, TableHeader, TableRow } from 'components'
import { TableWrapper } from 'components/PrivilegesTable'
import { ReactElement } from 'react'
import { Table } from 'react-bootstrap'
import { H4, H5 } from 'typography'
import { tableHeader, tableHeaderMain } from './const'
import { Border, FeeAction, FeeFooter, ReceiptLogo, ReceiptLogoWrapper, Subtitle } from './subcomponent'
import logo from '../../../assests/falcon.png'
import { shallowEqual, useSelector } from 'react-redux'
import { RootState } from 'redux/store'

const Receipt = (): ReactElement => {
    const {
        selectedStudentDetails,
        selectedFeeDetails
    } = useSelector(
        (state: RootState) => ({
            selectedStudentDetails: state.fms.selectedStudentDetails,
            selectedFeeDetails:state.fms.selectedFeeDetails
        }),
        shallowEqual
    )
    return (
        <PageWrapper>
            <>
                <FlexWrapper justifyContent='space-between' hasBorder>
                    <ReceiptLogoWrapper>
                        <ReceiptLogo src={logo} alt='falcon logo' />
                    </ReceiptLogoWrapper>
                    <div>
                        <H5>FALCON GROUP OF INSTITUTION</H5>
                        <H4><b>Shaheen PU Collage of Queens Road</b></H4>
                        <Subtitle >Queens road Darussalam Building</Subtitle>
                    </div>
                    <ReceiptLogoWrapper>
                        <ReceiptLogo src={logo} alt='falcon logo' />
                    </ReceiptLogoWrapper>
                </FlexWrapper>
                <FlexWrapper justifyContent='center'>
                    <SectionTitle title='Fee Receipt' />
                </FlexWrapper>
                <FeeAction
                    handleYear={'2022'}
                    handleClass={selectedStudentDetails?.courseId}
                    handleName={selectedStudentDetails?.studentName}
                    handleAdmNo={selectedStudentDetails?.regNo}
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
                            <td>DER345453-768</td>
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
                                <TableRow>
                                    <td>1</td>
                                    <td >
                                        <div >ACADEMIC FEES</div>
                                        <div >Late Payment Fee</div>
                                        <div>Remarks</div>
                                    </td>
                                    <td>
                                        <div>₹ 100</div>
                                    </td>
                                </TableRow>
                            </tbody>
                        </Table>
                    </TableWrapper>
                    <FeeFooter
                        handleAmount={selectedFeeDetails?.amount}
                        handleConcession={0}
                        handlePaidAmount={12000}
                        handleDue={33000}
                    />
                    <FlexWrapper justifyContent='center'>
                        <div>Thank You</div>
                    </FlexWrapper>
                </>
            </>
            <Border />
            <>
                <FlexWrapper justifyContent='space-between' hasBorder>
                    <ReceiptLogoWrapper>
                        <ReceiptLogo src={logo} alt='falcon logo' />
                    </ReceiptLogoWrapper>
                    <div>
                        <H5>FALCON GROUP OF INSTITUTION</H5>
                        <H4><b>Shaheen PU Collage of Queens Road</b></H4>
                        <Subtitle >Queens road Darussalam Building</Subtitle>
                    </div>
                    <ReceiptLogoWrapper>
                        <ReceiptLogo src={logo} alt='falcon logo' />
                    </ReceiptLogoWrapper>
                </FlexWrapper>
                <FlexWrapper justifyContent='center'>
                    <SectionTitle title='Fee Receipt' />
                </FlexWrapper>
                <FeeAction
                    handleYear={'2022'}
                    handleClass={selectedStudentDetails?.courseId}
                    handleName={selectedStudentDetails?.studentName}
                    handleAdmNo={selectedStudentDetails?.regNo}
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
                            <td>DER345453-768</td>
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
                                <TableRow>
                                    <td>1</td>
                                    <td >
                                        <div >ACADEMIC FEES</div>
                                        <div >Late Payment Fee</div>
                                        <div>Remarks</div>
                                    </td>
                                    <td>
                                        <div>₹ 100</div>
                                    </td>
                                </TableRow>
                            </tbody>
                        </Table>
                    </TableWrapper>
                    <FeeFooter
                        handleAmount={45000}
                        handleConcession={0}
                        handlePaidAmount={12000}
                        handleDue={33000}
                    />
                    <FlexWrapper justifyContent='center'>
                        <div>Thank You</div>
                    </FlexWrapper>
                </>
            </>
        </PageWrapper>
    )
}

export default Receipt