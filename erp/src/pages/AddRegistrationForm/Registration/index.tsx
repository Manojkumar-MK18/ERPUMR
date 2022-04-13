import { ReactElement } from 'react'
import { CardWrapper, CardHeader } from 'components'
import CourseInformation from './CourseInformation'
import ChildInformation from './ChildInformation'
import CommunicationDetails from './CommunicationDetails'
import PermanentDetails from './PermanentDetails'
import QualifyingExamDetails from './QualifyingExamDetails'
import strings from 'locale/en'

const Registration = (): ReactElement => {
  const {
    studentRegistration: {
      childInformation,
      courseInformation,
      communicationDetails,
      qualifyingExamDetails
    }
  } = strings
  return (
    <div>
      <CardWrapper>
        <CardHeader>{courseInformation.title}</CardHeader>
        <CourseInformation />
        <CardHeader>{childInformation.title}</CardHeader>
        <ChildInformation />
      </CardWrapper>
      <CardWrapper>
        <CardHeader>{communicationDetails.title}</CardHeader>
        <CommunicationDetails />
      </CardWrapper>
      <CardWrapper>
        <CardHeader>{communicationDetails.permanentDetails}</CardHeader>
        <PermanentDetails />
      </CardWrapper>
      <CardWrapper>
        <CardHeader>{qualifyingExamDetails.title}</CardHeader>
        <QualifyingExamDetails />
      </CardWrapper>
    </div>
  )
}

export default Registration
