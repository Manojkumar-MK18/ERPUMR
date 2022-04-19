import { ReactElement } from 'react'
import {
  PageWrapper,
  SectionTitle,
  TabWrapper,
  FlexWrapper,
  Button,
  TostMessage,
  Loader
} from 'components'
import strings from 'locale/en'
import Tabs from 'react-bootstrap/esm/Tabs'
import Tab from 'react-bootstrap/esm/Tab'
import Registration from './Registration'
import MedicalForm from './MedicalForm'
import Documents from './Documents'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import { resetError, addNewStudent } from 'redux/studentRegistration/actions'

const AddRegistrationForm = (): ReactElement => {
  const { error, isLoading } = useSelector(
    (state: RootState) => state.studentRegistration,
    shallowEqual
  )
  const dispatch = useDispatch()

  const {
    studentRegistration: {
      addRegistrationForm,
      registrationTab,
      medicalFormTab,
      documentsTab
    },
    button: { save }
  } = strings
  return (
    <PageWrapper id="container">
      <SectionTitle title={addRegistrationForm} hasBackButton />
      {error && (
        <TostMessage
          show={!!error}
          message={error}
          onCloseHandler={() => dispatch(resetError())}
        />
      )}
      <TabWrapper>
        <Tabs
          defaultActiveKey="applicationList"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="applicationList" title={registrationTab}>
            <Registration />
          </Tab>
          <Tab eventKey="onlineApplication" title={medicalFormTab} disabled>
            <MedicalForm />
          </Tab>
          <Tab eventKey="admittedList" title={documentsTab} disabled>
            <Documents />
          </Tab>
        </Tabs>
      </TabWrapper>
      <FlexWrapper justifyContent="center">
        {isLoading ? (
          <Loader />
        ) : (
          <Button
            onClick={() => {
              dispatch(addNewStudent())
            }}
          >
            {save}
          </Button>
        )}
      </FlexWrapper>
    </PageWrapper>
  )
}

export default AddRegistrationForm
