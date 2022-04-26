import { FlexWrapper, PageWrapper } from 'components'
import { ReactElement } from 'react'
import styled from 'styled-components'
import { H4 } from 'typography'

interface FeesProps {
    handleYear: string
    handleClass: string
    handleName: string
    handleAdmNo: string
    handleFatherName: string
    handleMobileNo: string
}

export const FeeAction = ({
    handleAdmNo,
    handleClass,
    handleName,
    handleYear,
    handleFatherName,
    handleMobileNo
}: FeesProps): ReactElement => {
    return (
        <PageWrapper>
            <FlexWrapper justifyContent="space-between" noPadding height={47}>
                <H4>Year:<b> {handleYear}</b></H4>
                <H4>Class:<b>{handleClass}</b></H4>
                <H4>Name:<b>{handleName}</b></H4>
                <H4>AdmissionNo:<b>{handleAdmNo}</b></H4>
            </FlexWrapper>
            <FlexWrapper justifyContent="space-between" noPadding width={'70%'}  >
                <H4>Father Name:<b>{handleFatherName}</b></H4>
                <H4>MobileNo:<b> {handleMobileNo}</b></H4>
            </FlexWrapper>
        </PageWrapper>
    )
}

interface FeeTableProps {
    handleAmount: number
    handleConcession: number
    handlePaidAmount: number
    handleDue: number
}

const FeeWrapper = styled.div`
margin-left: auto;
  align-items: flex-end;
  text-align: end;
  width: 35%;
`

export const FeeFooter = ({
    handleAmount,
    handleConcession,
    handleDue,
    handlePaidAmount
}: FeeTableProps): ReactElement => {
    return (
        <PageWrapper>
            <FeeWrapper>
                <H4 hasBorder hasPadding>Total Amount: <b id='footer'>₹ {handleAmount}</b></H4>
                <H4 hasBorder hasPadding>Concession:<b id='footer'>₹{handleConcession}</b></H4>
                <H4 hasBorder hasPadding>Amount Paid:<b id='footer'>₹{handlePaidAmount}</b></H4>
                <H4 hasBorder hasPadding>Total Due:<b id='footer'>₹{handleDue}</b></H4>
            </FeeWrapper>
        </PageWrapper>
    )
}
