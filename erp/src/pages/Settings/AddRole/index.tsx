import { ReactElement } from 'react'
import strings from 'locale/en'
import {
  FlexWrapper,
  PageWrapper,
  SectionTitle,
  Input,
  Button,
  TableWrapper,
  TableHeader,
  TableRow,
  TableFooter,
  Icon
} from 'components'
import { Table } from 'react-bootstrap'
import { tableHeader } from './const'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddRole = (): ReactElement => {
  const {
    role: { addRole, addRolePlaceholder, addRoleLabel },
    button: { save }
  } = strings

  return (
    <PageWrapper id="container">
      <SectionTitle title={addRole} hasBorder />
      <FlexWrapper>
        <Input
          label={addRoleLabel}
          placeholder={addRolePlaceholder}
          value={''}
          onBlur={() => { }}
          error={''}
          width="30%"
          onChange={(value: string) => {
            console.log(value)
          }}
          height="72px"
        />
        <Button
          onClick={() => {
          }}
        >{save}</Button>
      </FlexWrapper>
      <>
        <TableWrapper>
          <Table size='sm' responsive="sm">
            <TableHeader>
              <TableRow>
                {tableHeader.map((header, index) => (
                  <th key={`role-${index}`}>{header}</th>
                ))}
              </TableRow>
            </TableHeader>
            <tbody>
              <TableRow>
                <td>1</td>
                <td>Role</td>
                <td>00-00-0000</td>
                <td>
                  <Icon
                    variant="outline-light"
                    onClick={() => { }}
                  >
                    <FontAwesomeIcon icon={['far', 'eye']} />
                  </Icon>
                  <Icon
                    variant="outline-light"
                    onClick={() => { }}
                  >
                    <FontAwesomeIcon icon={['far', 'trash-alt']} />
                  </Icon>
                </td>
              </TableRow>
            </tbody>
          </Table>
          <TableFooter
            currentPage={0}
            totalPages={0}
            handlePrevious={() => { }}
            handleNext={() => { }}
          />
        </TableWrapper>
      </>
    </PageWrapper>
  )
}

export default AddRole
