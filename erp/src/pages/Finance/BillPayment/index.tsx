import { ReactElement } from 'react'
import {
  PageWrapper,
  SectionTitle,
  TableWrapper,
  TableHeader,
  TableFooter,
  TableRow
} from 'components'
import strings from 'locale/en'
import Table from 'react-bootstrap/Table'
import { tableHeader } from './const'

const BillPayment = (): ReactElement => {
  const {
    finance: { billPayments }
  } = strings
  return (
    <PageWrapper id="container">
      <SectionTitle title={billPayments} />
      <div>
        <TableWrapper>
          <Table size="sm" responsive="sm">
            <TableHeader>
              <TableRow>
                {tableHeader?.map((header, index) => (
                  <th key={`header-${index}`}>{header}</th>
                ))}
              </TableRow>
            </TableHeader>
            <tbody>
              <TableRow>
                <td>{'Bill Number'}</td>
                <td>{'Bill Date'}</td>
                <td>{'Total Amount'}</td>
                <td>{'Paid Amount'}</td>
                <td>{'Balance Amount'}</td>
                <td>{'Status'}</td>
              </TableRow>
            </tbody>
          </Table>
          <TableFooter
            currentPage={1}
            totalPages={2}
            handleNext={() => {}}
            handlePrevious={() => {}}
          />
        </TableWrapper>
      </div>
    </PageWrapper>
  )
}

export default BillPayment
