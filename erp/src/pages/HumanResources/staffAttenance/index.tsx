import { ReactElement } from 'react'
import {
  Button,
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  Input,
  PageWrapper,
  SectionTitle,
  TableHeader,
  TableRow,
  TableWrapper
} from 'components'
import strings from 'locale/en'
import Table from 'react-bootstrap/Table'
import { tableHeader } from './const'
import EmployeeName from './subcomponents'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from 'redux/store'

const StaffManagement = (): ReactElement => {
  const { attenanceList } = useSelector(
    (state: RootState) => state.acamedic,
    shallowEqual
  )

  const {
    staffManagement: {
      title,
      selectEmployee,
      selectEmployeePlaceholder,
      date,
      selectDate,
      selectStatus
    },
    button: { search }
  } = strings

  return (
    <PageWrapper id="container">
      <SectionTitle title={title} />
      <FlexWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={[]}
            title={selectEmployee}
            placeholder={selectEmployeePlaceholder}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            label={date}
            placeholder={selectDate}
            value={''}
            onBlur={() => {}}
            error={''}
            isRequired
            width="100%"
            onChange={(value: string) => {
              console.log(value)
            }}
            height="50px"
          />
        </DropdownWrapper>
        <Button onClick={() => {}} style={{marginTop:'24px'}}>{search}</Button>
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
                <td>{'1'}</td>
                <EmployeeName>{'Dina'}</EmployeeName>
                <td>
                  <FlexWrapper justifyContent="center" noPadding>
                    <EditableDropdown
                      dropdownList={attenanceList}
                      placeholder={selectStatus}
                      onBlur={() => {}}
                      error={''}
                      handleSelect={() => {}}
                      width="80%"
                    />
                  </FlexWrapper>
                </td>
              </TableRow>
            </tbody>
          </Table>
        </TableWrapper>
      </div>
    </PageWrapper>
  )
}

export default StaffManagement
