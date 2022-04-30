import {
  PageWrapper,
  SectionTitle,
  TableHeader,
  TableRow,
  TableWrapper
} from 'components'
import { ReactElement } from 'react'
import { Table } from 'react-bootstrap'
import { tableHeader } from './const '

const LeaveStatus = (): ReactElement => {
  return (
    <PageWrapper>
      <SectionTitle title='Leave Status' />
      <>
        <TableWrapper>
          <Table size='sm' responsive="sm">
            <TableHeader>
              <TableRow>
                {tableHeader.map((header, index) => (
                  <th key={`status-${index}`}>{header}</th>
                ))}
              </TableRow>
            </TableHeader>
            <tbody>
              <TableRow>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </TableRow>
            </tbody>
          </Table>
        </TableWrapper>
      </>
    </PageWrapper>
  )
}

export default LeaveStatus