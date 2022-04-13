import { ReactElement } from 'react'
import {
  PageWrapper,
  SectionTitle,
  TableWrapper,
  TableHeader,
  TableFooter,
  TableRow,
  Icon
} from 'components'
import strings from 'locale/en'
import Table from 'react-bootstrap/Table'
import { tableHeader } from './const'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SubGroup = (): ReactElement => {
  const {
    finance: { subGroupList }
  } = strings
  return (
    <PageWrapper id="container">
      <SectionTitle title={subGroupList} />
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
                <td>{'Current Asset'}</td>
                <td>{'AG'}</td>
                <td>{'FNG01'}</td>
                <td>
                  <>
                    <Icon variant="outline-light" onClick={() => {}}>
                      <FontAwesomeIcon icon={['far', 'edit']} />
                    </Icon>
                    <Icon variant="outline-light" onClick={() => {}}>
                      <FontAwesomeIcon icon={['far', 'trash-alt']} />
                    </Icon>
                  </>
                </td>
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

export default SubGroup
