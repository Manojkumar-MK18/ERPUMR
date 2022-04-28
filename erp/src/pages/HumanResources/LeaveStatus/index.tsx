import {
  PageWrapper,
  SectionTitle,
  TableWrapper
} from 'components'
import { ReactElement } from 'react'
import { Table } from 'react-bootstrap'

const LeaveStatus = (): ReactElement => {
  return (
    <PageWrapper>
      <SectionTitle title='Leave Status' />
      <>
        <TableWrapper>
          <Table>

          </Table>
        </TableWrapper>
      </>
    </PageWrapper>
  )
}

export default LeaveStatus