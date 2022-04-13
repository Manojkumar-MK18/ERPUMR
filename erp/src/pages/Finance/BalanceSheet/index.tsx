import { ReactElement } from 'react'
import {
  PageWrapper,
  SectionTitle,
  FlexWrapper,
  DropdownWrapper,
  EditableDropdown,
  TableWrapper,
  TableHeader,
  TableRow
} from 'components'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from 'redux/store'
import strings from 'locale/en'
import { H3 } from 'typography'
import { colors } from 'const/theme'
import { tableHeader } from './const'
import Table from 'react-bootstrap/Table'

const BalanceSheet = (): ReactElement => {
  const {
    academic: { academicYear: academicYearList }
  } = useSelector(
    (state: RootState) => ({
      academic: state.acamedic
    }),
    shallowEqual
  )

  const {
    finance: { balanceSheet },
    studentRegistration: {
      childInformation: { academicYear, selectYear }
    }
  } = strings
  return (
    <PageWrapper id="container">
      <SectionTitle title={balanceSheet} hasBorder />
      <FlexWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={academicYearList}
            title={academicYear}
            placeholder={selectYear}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
          />
        </DropdownWrapper>
      </FlexWrapper>
      <H3 color={colors.purple}>
        Balance Sheet for the Academic Year 2021-2022
      </H3>
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
                <td>{'1'}</td>
                <td>{'CURRENT LIABILITY'}</td>
                <td>{'0'}</td>
                <td>{''}</td>
                <td>{'CURRENT ASSET'}</td>
                <td>{'0'}</td>
                <td>{''}</td>
              </TableRow>
            </tbody>
          </Table>
        </TableWrapper>
      </div>
    </PageWrapper>
  )
}

export default BalanceSheet
