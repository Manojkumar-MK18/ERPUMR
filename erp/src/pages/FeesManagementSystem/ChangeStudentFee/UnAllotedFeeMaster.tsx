import { ReactElement } from 'react'
import { TableWrapper, TableHeader, TableRow, SectionTitle } from 'components'
import Table from 'react-bootstrap/Table'
import { unAllotedFeeMasterHeader } from './const'
import strings from 'locale/en'
import { Wrapper } from './subcomponents'

const UnAllotedFeeMaster = (): ReactElement => {
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
              {unAllotedFeeMasterHeader?.map((header, index) => (
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

export default UnAllotedFeeMaster
