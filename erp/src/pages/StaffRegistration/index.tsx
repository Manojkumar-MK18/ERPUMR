import { ReactElement } from 'react'
import {
  PageWrapper,
  SectionTitle,
  TableWrapper,
  TableHeader,
  TableRow,
  Button,
  TabWrapper
} from 'components'
import strings from 'locale/en'
import Tabs from 'react-bootstrap/esm/Tabs'
import Tab from 'react-bootstrap/esm/Tab'
import { Table } from 'react-bootstrap'
import { tableHeader } from './const'
import { useHistory } from 'react-router-dom'
import ROUTES from 'const/routes'
import { DropdownWrapper } from './subcomponents'

const StaffRegistration = (): ReactElement => {
  const {
    studentRegistration: {
      registration,
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
      <DropdownWrapper>
        <Button
          onClick={() => {
            history.push(ROUTES.ADDSTAFFREGISTRATION)
          }}
        >
          {addRegistration}
        </Button>
      </DropdownWrapper>
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
              </TableRow>
            </tbody>
          </Table>
        </TableWrapper>
      </div>
    </PageWrapper>
  )
}

export default StaffRegistration
