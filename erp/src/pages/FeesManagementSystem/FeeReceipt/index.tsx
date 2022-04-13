import { ReactElement, useState } from 'react'
import {
  PageWrapper,
  SectionTitle,
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  Button,
  Input
} from 'components'
import strings from 'locale/en'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from 'redux/store'
import { DatePickerWrapper } from './subcomponents'
import DatePicker from 'react-datepicker'
import FeeDescription from './FeeDescription'
import LedgerDetails from './LedgerDetails'
import SecondaryButton from 'react-bootstrap/Button'

const FeeReceipt = (): ReactElement => {
  const [startDate, setStartDate] = useState<string>(new Date().toDateString())
  const [showFeeDescription, setShowFeeDescription] = useState(true)
  const {
    feeTypeList,
    academic: {
      academicYear: academicYearList,
      year: yearList,
      university: universityList,
      courseList,
      syllabusList,
      termList
    }
  } = useSelector(
    (state: RootState) => ({
      feeTypeList: state.acamedic.feeTypeList,
      academic: state.acamedic
    }),
    shallowEqual
  )
  const {
    fms: {
      feeReceipt: { receipt, date, nextDueDate },
      feeDescription: { selectFeeType, feeType }
    },
    studentRegistration: {
      childInformation: {
        year,
        selectYear,
        academicYear,
        selectUniversity,
        university,
        selectCourse,
        course,
        selectSyllabus,
        syllabus,
        selectTerm,
        term,
        selectName,
        name,
        selectAdmission,
        admissionNo,
        fatherName,
        dobPlaceholder,
        dobLabel,
        feePayable,
        lastYearBalance
      }
    },
    button: { cancel, print }
  } = strings

  console.log(setShowFeeDescription)

  return (
    <PageWrapper id="container">
      <FlexWrapper justifyContent="space-between" noPadding>
        <SectionTitle title={receipt} />
        <FlexWrapper>
          <DropdownWrapper width="50%">
            <EditableDropdown
              dropdownList={[]}
              placeholder={'Receipt No'}
              onBlur={() => {}}
              error={''}
              handleSelect={() => {}}
            />
          </DropdownWrapper>
          <div>
            <Button>ShowHistory</Button>
          </div>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={feeTypeList}
            title={selectFeeType}
            placeholder={feeType}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
          />
        </DropdownWrapper>
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
          <DatePickerWrapper>
            <DatePicker
              selected={new Date(startDate)}
              onSelect={(date) => console.log(date)}
              onChange={(date: Date) => {
                setStartDate(date.toDateString())
              }}
              placeholderText={date}
              customInput={
                <Input
                  label={date}
                  value={startDate}
                  inputType="text"
                  placeholder={date}
                  onChange={(date) => setStartDate(date)}
                  suffix={['far', 'calendar']}
                />
              }
            />
          </DatePickerWrapper>
        </DropdownWrapper>
        <DropdownWrapper>
          <DatePickerWrapper>
            <DatePicker
              selected={new Date(startDate)}
              onSelect={(date) => console.log(date)}
              onChange={(date: Date) => {
                setStartDate(date.toDateString())
              }}
              placeholderText={nextDueDate}
              customInput={
                <Input
                  label={nextDueDate}
                  value={startDate}
                  inputType="text"
                  placeholder={date}
                  onChange={(date) => setStartDate(date)}
                  suffix={['far', 'calendar']}
                />
              }
            />
          </DatePickerWrapper>
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={universityList}
            title={selectUniversity}
            placeholder={university}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={courseList}
            title={selectCourse}
            placeholder={course}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={syllabusList}
            title={selectSyllabus}
            placeholder={syllabus}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={termList}
            title={selectTerm}
            placeholder={term}
            onBlur={() => {}}
            error={''}
            isRequired
            handleSelect={() => {}}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={[]}
            title={selectName}
            placeholder={name}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={[]}
            title={selectAdmission}
            placeholder={admissionNo}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
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
        <DropdownWrapper>
          <Input
            label={dobLabel}
            placeholder={dobPlaceholder}
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
        <DropdownWrapper>
          <Input
            label={feePayable}
            placeholder={feePayable}
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
        <DropdownWrapper>
          <Input
            label={lastYearBalance}
            placeholder={lastYearBalance}
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
      {showFeeDescription && <FeeDescription />}
      <LedgerDetails />
      <FlexWrapper justifyContent="flex-end">
        <SecondaryButton variant="outline-secondary">{cancel}</SecondaryButton>
        <Button>{print}</Button>
      </FlexWrapper>
    </PageWrapper>
  )
}

export default FeeReceipt
