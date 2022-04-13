import { ReactElement } from 'react'
import {
  PageWrapper,
  SectionTitle,
  TableWrapper,
  FlexWrapper,
  EditableDropdown,
  DropdownWrapper,
  TableHeader,
  TableFooter,
  TableRow,
  Icon,
  Input
} from 'components'
import strings from 'locale/en'
import Table from 'react-bootstrap/Table'
import { tableHeader } from './const'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from 'redux/store'

const LedgerList = (): ReactElement => {
  const { assetList } = useSelector(
    (state: RootState) => ({
      assetList: state.finance.assetList
    }),
    shallowEqual
  )
  const {
    finance: { ledgerList, groupName }
  } = strings
  return (
    <PageWrapper id="container">
      <SectionTitle title={ledgerList} hasBorder />
      <FlexWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={assetList}
            title={groupName}
            placeholder={groupName}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            label={'Search'}
            placeholder={'Search'}
            value={''}
            onBlur={() => {}}
            error={''}
            width="100%"
            onChange={(value: string) => {
              console.log(value)
            }}
            height="50px"
          />
        </DropdownWrapper>
      </FlexWrapper>
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
                <td>{'Fee received'}</td>
                <td>{'0'}</td>
                <td>{'0'}</td>
                <td>{'0'}</td>
                <td>{'0'}</td>
                <td>{'Current Liability'}</td>
                <td>{'Sub group'}</td>
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

export default LedgerList
