import { FlexWrapper, PageWrapper } from 'components'
import { ReactElement } from 'react'
import styled from 'styled-components'
import { H4 } from 'typography'

export const ReceiptLogoWrapper = styled.div`
  //width: 120px;
  //height: 76%;
  display: flex;
  margin: auto 12px;
`

export const ReceiptLogo = styled.img`
  margin: 0 auto;
  height: 100%;
  width: 100%;
`

export const Subtitle = styled.div`
  text-align: center;
  font-size: 15px;
`

export const Border = styled.div`
  border-bottom: 1px dotted gray;
  margin: 5px;
`

interface FeesProps {
  handleYear: string | any
  handleClass: string | any
  handleName: string | any
  handleAdmNo: string | any
  handleBranch: string | any
  handleBatch: string | any
  handleStudentId: string | any
}

export const FeeAction = ({
  handleAdmNo,
  handleClass,
  handleName,
  handleYear,
  handleBatch,
  handleBranch,
  handleStudentId
}: FeesProps): ReactElement => {
  return (
    <PageWrapper>
      <FlexWrapper justifyContent="space-between" noPadding height={45}>
        <H4>
          Year:<b> {handleYear}</b>
        </H4>
        <H4>
          Name:<b>{handleName}</b>
        </H4>
        <H4>
          AdmissionNo:<b>{handleAdmNo}</b>
        </H4>
      </FlexWrapper>
      <FlexWrapper justifyContent="space-between" noPadding height={47}>
        <H4>
          Receipt Id:<b>{handleStudentId}</b>
        </H4>
        <H4>
          Course:<b>{handleClass}</b>
        </H4>
        <H4>
          Branch:<b>{handleBranch}</b>
        </H4>
        <H4>
          Batch:<b>{handleBatch}</b>
        </H4>
      </FlexWrapper>
    </PageWrapper>
  )
}

interface FeeTableProps {
  handleAmount: number | any
  handleConcession: number
  handlePaidAmount: number | any
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
        <H4 hasBorder hasPadding>
          Total Amount: <b id="footer">₹ {handleAmount}</b>
        </H4>
        <H4 hasBorder hasPadding>
          Concession:<b id="footer">₹{handleConcession}</b>
        </H4>
        <H4 hasBorder hasPadding>
          Amount Paid:<b id="footer">₹{handlePaidAmount}</b>
        </H4>
        <H4 hasBorder hasPadding>
          Total Due:<b id="footer">₹{handleDue}</b>
        </H4>
      </FeeWrapper>
    </PageWrapper>
  )
}
