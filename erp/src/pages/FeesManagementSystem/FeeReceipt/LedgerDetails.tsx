import { ReactElement } from 'react'
import { TableWrapper, TableHeader, TableRow, Icon } from 'components'
import Table from 'react-bootstrap/Table'
import { tableHeader } from './const'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LedgerDetails = (): ReactElement => {
  return (
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
              <td>{'000'}</td>
              <td>{'0'}</td>
              <td>
                <Icon variant="outline-light" onClick={() => {}}>
                  <FontAwesomeIcon icon={['fas', 'plus-circle']} />
                </Icon>
              </td>
              <td>
                <Icon variant="outline-light" onClick={() => {}}>
                  <FontAwesomeIcon icon={['far', 'trash-alt']} />
                </Icon>
              </td>
            </TableRow>
          </tbody>
        </Table>
      </TableWrapper>
    </div>
  )
}

export default LedgerDetails
