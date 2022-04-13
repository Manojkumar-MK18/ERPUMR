import { ReactElement } from 'react'
import { CardWrapper, CardHeader } from 'components'
import strings from 'locale/en'
import ChildInformation from './ChildInformation'
import ContactInformation from './ContactInformation'
import PhysicianInformation from './PhysicianInformation'
import HealthInsurance from './HealthInsurance'
import MedicalInformation from './MedicalInformation'

const MedicalForm = (): ReactElement => {
  const {
    studentRegistration: {
      childInformation: { title },
      contactInformation,
      physicianInformation,
      healthInsurance,
      medicalInformation
    }
  } = strings
  return (
    <div>
      <CardWrapper>
        <CardHeader>{title}</CardHeader>
        <ChildInformation />
      </CardWrapper>
      <CardWrapper>
        <CardHeader>{contactInformation}</CardHeader>
        <ContactInformation />
      </CardWrapper>
      <CardWrapper>
        <CardHeader>{physicianInformation}</CardHeader>
        <PhysicianInformation />
      </CardWrapper>
      <CardWrapper>
        <CardHeader>{healthInsurance}</CardHeader>
        <HealthInsurance />
      </CardWrapper>
      <CardWrapper>
        <CardHeader>{medicalInformation}</CardHeader>
        <MedicalInformation />
      </CardWrapper>
    </div>
  )
}

export default MedicalForm
