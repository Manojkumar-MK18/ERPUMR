import { ReactElement } from 'react'
import {
  SectionTitle,
  PageWrapper,
  FlexWrapper,
  DropdownWrapper,
  EditableDropdown,
  Input,
  FileUploader
} from 'components'
import strings from 'locale/en'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from 'redux/store'

const StudentConsession = (): ReactElement => {
  const { semester } = useSelector(
    (state: RootState) => state.acamedic,
    shallowEqual
  )

  const {
    stuentConsession: { title, students },
    studentRegistration: {
      semesterOrClass,
      childInformation: { fatherName }
    }
  } = strings

  return (
    <PageWrapper id="container">
      <SectionTitle title={title} />
      <FlexWrapper>
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
        <DropdownWrapper>
          <Input
            label={fatherName}
            placeholder={fatherName}
            value={''}
            onBlur={() => {}}
            error={''}
            width="100%"
            onChange={(value: string) => {
              console.log(value)
            }}
            height="50px"
            isDisabled
          />
        </DropdownWrapper>
      </FlexWrapper>
      <FileUploader type="image" />
    </PageWrapper>
  )
}

export default StudentConsession
