import { ReactElement } from 'react'
import {
  FlexWrapper,
  PageWrapper,
  SectionTitle,
  EditableDropdown,
  DropdownWrapper,
  TableWrapper,
  TableHeader,
  TableRow,
  Button,
  TabWrapper
} from 'components'
import strings from 'locale/en'
import Tabs from 'react-bootstrap/esm/Tabs'
import Tab from 'react-bootstrap/esm/Tab'
import { ActionWrapper } from './subcomponents'
import { Table } from 'react-bootstrap'
import { tableHeader } from './const'
import { useHistory } from 'react-router-dom'
import ROUTES from 'const/routes'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from 'redux/store'

const StudentRegistartion = (): ReactElement => {
  const {
    semester,
    academicYear: academicYearList,
    year: yearList
  } = useSelector((state: RootState) => state.acamedic, shallowEqual)
  const {
    studentRegistration: {
      registration,
      semesterOrClass,
      academicYear,
      year,
      addRegistration,
      applicationList,
      admittedList,
      onlineApplication
    }
  } = strings
  const history = useHistory()

  return (
    <PageWrapper id="container">
      <SectionTitle title={registration} />
      <FlexWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={semester}
            title={semesterOrClass}
            placeholder={semesterOrClass}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={academicYearList}
            title={academicYear}
            placeholder={academicYear}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={yearList}
            title={year}
            placeholder={year}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Button
            onClick={() => {
              history.push(ROUTES.ADDREGISTRATION)
            }}
          >
            {addRegistration}
          </Button>
        </DropdownWrapper>
      </FlexWrapper>
      <TabWrapper>
        <Tabs
          defaultActiveKey="applicationList"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="applicationList" title={applicationList}></Tab>
          <Tab eventKey="onlineApplication" title={onlineApplication}></Tab>
          <Tab eventKey="admittedList" title={admittedList}></Tab>
        </Tabs>
      </TabWrapper>
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
                <td>{'Student Name'}</td>
                <td>{'Semester/Class'}</td>
                <td>{'001'}</td>
                <td>{'General'}</td>
                <td>{'Father Name'}</td>
                <td>{'Father Number'}</td>
                <td>{'UID'}</td>
                <td>{'20/04/2021'}</td>
                <td>
                  <ActionWrapper />
                </td>
              </TableRow>
            </tbody>
          </Table>
        </TableWrapper>
      </div>
    </PageWrapper>
  )
}

export default StudentRegistartion
