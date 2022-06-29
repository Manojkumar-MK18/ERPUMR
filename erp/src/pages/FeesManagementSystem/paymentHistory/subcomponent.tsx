import { FlexWrapper } from 'components'
import { ReactElement } from 'react'
import styled from 'styled-components'
import { H4 } from 'typography'
import { StudentDeatilsProps } from './typing'

export const StudentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  margin-top: -67px;
  @media (max-width: 415px) {
    width: 98%;
  }
  background: ${({ theme }) => theme.appBackground};
`

const StudentDetails = ({
    handleBatch,
    handleBranch,
    handleCourse,
    handleFatherName,
    handleMobNum,
    handleName
}: StudentDeatilsProps): ReactElement => {
    return (
        <StudentWrapper>
            <FlexWrapper justifyContent="space-between" noPadding>
                <H4>
                    Student Name:<b> {handleName}</b>
                </H4>
                <H4>
                    Course:<b> {handleCourse}</b>
                </H4>
                <H4>
                    Branch:<b> {handleBranch}</b>
                </H4>
            </FlexWrapper>
            <FlexWrapper justifyContent="space-between">
                <H4>
                    Batch:<b> {handleBatch}</b>
                </H4>
                <H4>
                    Father Name:<b> {handleFatherName}</b>
                </H4>
                <H4>
                    Mobile Number:<b> {handleMobNum}</b>
                </H4>
            </FlexWrapper>
        </StudentWrapper>
    )
}

export default StudentDetails
