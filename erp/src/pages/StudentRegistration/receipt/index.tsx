import { FlexWrapper, PageWrapper, SectionTitle, TableHeader, TableRow } from 'components'
import { TableWrapper } from 'components/PrivilegesTable'
import React, { ReactElement } from 'react'
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
        selectedFeeDetails,
        selectedFeetotalDetails,
        selectedPaymentMode
    } = useSelector(
        (state: RootState) => ({
            selectedStudentDetails: state.fms.selectedStudentDetails,
            selectedFeeDetails: state.fms.selectedFeeDetails,
            selectedFeetotalDetails: state.fms.selectedFeetotalDetails,
            selectedPaymentMode: state.fms.selectedPaymentMode
        }),
        shallowEqual
    )

    console.log(selectedFeetotalDetails);

    return (
        <PageWrapper >
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
                    handleYear={selectedFeetotalDetails?.academicYear}
                    handleClass={selectedStudentDetails?.coachingCentre}
                    handleName={selectedStudentDetails?.studentName}
                    handleAdmNo={selectedStudentDetails?.regNo}
                    handleBranch={undefined}
                    handleBatch={undefined}
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
                            <td>DSE5643-09</td>
                            <td>{`${selectedPaymentMode?.cash}${selectedPaymentMode?.cash === 'Online' ? (selectedPaymentMode?.dateOn) : ''}`}</td>
                            <td>{`${new Date().toLocaleDateString()}`} </td>
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
                                    <td>
                                        <div style={{ borderBottom: '1px solid lightgray', padding: '5px' }}>ACADEMIC FEES</div>
                                        <div style={{ padding: '5px' }}>Remarks</div>
                                    </td>
                                    <td>
                                        <div style={{ borderBottom: '1px solid lightgray', padding: '5px' }}>₹ 100</div>
                                        <div style={{ padding: '5px' }}></div>
                                    </td>
                                </TableRow>
                            </tbody>
                        </Table>
                    </TableWrapper>
                    <FeeFooter
                        handleAmount={selectedFeetotalDetails?.amount}
                        handleConcession={0}
                        handlePaidAmount={selectedFeeDetails?.amount}
                        handleDue={Number(selectedFeetotalDetails?.amount) - Number(selectedFeeDetails?.amount)}
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
                    handleBranch={undefined}
                    handleBatch={undefined}
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
                            <td>DSE5643-09</td>
                            <td>{selectedPaymentMode?.cash}</td>
                            <td>{`${new Date().toLocaleDateString()}`} </td>
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
                                        <div style={{ borderBottom: '1px solid lightgray', padding: '5px' }}>ACADEMIC FEES</div>
                                        <div style={{ padding: '5px' }}>Remarks</div>
                                    </td>
                                    <td>
                                        <div style={{ borderBottom: '1px solid lightgray', padding: '5px' }}>₹ 100</div>
                                        <div style={{ padding: '5px' }}></div>
                                    </td>
                                </TableRow>
                            </tbody>
                        </Table>
                    </TableWrapper>
                    <FeeFooter
                        handleAmount={selectedFeetotalDetails?.amount}
                        handleConcession={0}
                        handlePaidAmount={selectedFeeDetails?.amount}
                        handleDue={Number(selectedFeetotalDetails?.amount) - Number(selectedFeeDetails?.amount)}
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