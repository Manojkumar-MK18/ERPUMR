import { ReactElement } from 'react'
import { TableWrapper, TableHeader, TableRow, SectionTitle } from 'components'
import Table from 'react-bootstrap/Table'
import { allotedFeeMasterHeader } from './const'
import strings from 'locale/en'
import { Wrapper } from './subcomponents'

const AllotedFeeMaster = (): ReactElement => {
  const {
    changeStudentFee: { allotedFeeMaster }
  } = strings
  return (
    <Wrapper>
      <SectionTitle title={allotedFeeMaster} hasPadding={false} />
      <TableWrapper>
        <Table size="sm" responsive="sm">
          <TableHeader>
            <TableRow>
              {allotedFeeMasterHeader?.map((header, index) => (
                <th key={`header-${index}`}>{header}</th>
              ))}
            </TableRow>
          </TableHeader>
          <tbody>
            <TableRow></TableRow>
          </tbody>
        </Table>
      </TableWrapper>
    </Wrapper>
  )
}

export default AllotedFeeMaster
