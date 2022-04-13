import { ReactElement } from 'react'
import {
  SectionTitle,
  PageWrapper,
  FlexWrapper,
  DropdownWrapper,
  EditableDropdown
} from 'components'
import strings from 'locale/en'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from 'redux/store'
import AllotedFeeMaster from './AllotedFeeMaster'
import UnAllotedFeeMaster from './UnAllotedFeeMaster'

const ChangeStudentFee = (): ReactElement => {
  const {
    semester,
    academicYear: academicYearList,
    year: yearList
  } = useSelector((state: RootState) => state.acamedic, shallowEqual)

  const {
    stuentConsession: { students },
    changeStudentFee: { title },
    studentRegistration: {
      semesterOrClass,
      childInformation: { year, selectYear, academicYear }
    }
  } = strings

  return (
    <PageWrapper id="container">
      <SectionTitle title={title} />
      <FlexWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={yearList}
            title={year}
            placeholder={selectYear}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
          />
        </DropdownWrapper>
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
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={semester}
            title={semesterOrClass}
            placeholder={semesterOrClass}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
            isRequired
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={[]}
            title={students}
            placeholder={students}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
            isRequired
          />
        </DropdownWrapper>
      </FlexWrapper>
      <AllotedFeeMaster />
      <UnAllotedFeeMaster />
    </PageWrapper>
  )
}

export default ChangeStudentFee
