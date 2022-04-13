import { ReactElement } from 'react'
import {
  PageWrapper,
  SectionTitle,
  TabWrapper,
  FlexWrapper,
  Button
} from 'components'
import strings from 'locale/en'
import Tabs from 'react-bootstrap/esm/Tabs'
import Tab from 'react-bootstrap/esm/Tab'
import Registration from './Registration'
import MedicalForm from './MedicalForm'
import Documents from './Documents'

const AddRegistrationForm = (): ReactElement => {
  const {
    studentRegistration: {
      addRegistrationForm,
      registrationTab,
      medicalFormTab,
      documentsTab
    },
    button: { save, saveAndPay }
  } = strings
  return (
    <PageWrapper id="container">
      <SectionTitle title={addRegistrationForm} hasBackButton />
      <TabWrapper>
        <Tabs
          defaultActiveKey="applicationList"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="applicationList" title={registrationTab}>
            <Registration />
          </Tab>
          <Tab eventKey="onlineApplication" title={medicalFormTab}>
            <MedicalForm />
          </Tab>
          <Tab eventKey="admittedList" title={documentsTab}>
            <Documents />
          </Tab>
        </Tabs>
      </TabWrapper>
      <FlexWrapper justifyContent="flex-end">
        <Button>{save}</Button>
        <Button>{saveAndPay}</Button>
      </FlexWrapper>
    </PageWrapper>
  )
}

export default AddRegistrationForm
