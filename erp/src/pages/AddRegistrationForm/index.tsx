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
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { studentRegistration } from 'redux/studentRegistration/api'

const AddRegistrationForm = (): ReactElement => {
  const {
    registrationData
  } = useSelector(
    (state: RootState) => ({
      registrationData: state.studentRegistration.studentRegistration,
    })
  )
  const {
    studentRegistration: {
      addRegistrationForm,
      registrationTab,
      medicalFormTab,
      documentsTab
    },
    button: { save, saveAndPay }
  } = strings
  // eslint-disable-next-line no-unused-vars

  const dispatch = useDispatch()
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
        <Button
          onClick={() => {
            dispatch(studentRegistration({...registrationData}))
          }}
        >{save}</Button>
        <Button>{saveAndPay}</Button>
      </FlexWrapper>
    </PageWrapper>
  )
}

export default AddRegistrationForm
