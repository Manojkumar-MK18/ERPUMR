import { ReactElement } from 'react'
import {
  PageWrapper,
  DropdownWrapper,
  Input,
  EditableDropdown
} from 'components'
import { InfoWrapper, FlexWrapper } from '../subcomponents'
import strings from 'locale/en'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import { updateQualifyingExamDetails } from 'redux/studentRegistration/actions'
import isNumeric from 'helpers/isNumeric'
import { HandleChangeOptions } from './typings'

const QualifyingExamDetails = (): ReactElement => {
  const {
    qualifyingExamDetails: {
      previousExamRegNo,
      satsNo,
      school,
      yearOfPassing,
      obtainedMarks,
      percentage
    },
    boardList,
    mediumType,
    qualificationDetailsD
  } = useSelector(
    (state: RootState) => ({
      qualifyingExamDetails: state.studentRegistration.studentRegistration.qualifyingExamDetails,
      boardList: state.acamedic.boardList,
      mediumType:state.acamedic.mediumType,
      qualificationDetailsD:state.acamedic.qualificationDetailsD
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  const {
    studentRegistration: {
      qualifyingExamDetails: {
        qualifyingExamLabel,
        qualifyingExamPlaceholder,
        mediumLabel,
        mediumPlaceholder,
        previousExamLabel,
        previousExamPlaceholder,
        satsNoLabel,
        satsPlaceholder,
        boardLabel,
        boardPlaceholder,
        schoolLabel,
        schoolPlaceholder,
        yearOfPassingLabel,
        yearOfPassingPlaceholder,
        obtainMarksLabel,
        obtainMarksPlaceholder,
        percentagePlaceholder,
        percentagelabel
      }
    }
  } = strings

  const handleChange = ({
    key,
    value,
    isNumericValue
  }: HandleChangeOptions) => {
    if ((isNumericValue && isNumeric(value)) || !isNumericValue) {
      dispatch(updateQualifyingExamDetails({ [key]: value }))
    }
  }

  return (
    <PageWrapper>
      <InfoWrapper>
        <FlexWrapper width="100%">
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={qualificationDetailsD}
              title={qualifyingExamLabel}
              placeholder={qualifyingExamPlaceholder}
              onBlur={() => {}}
              error={''}
              handleSelect={(item) =>
                handleChange({
                  key: 'qualifyingExam',
                  value: item.name,
                  isNumericValue: false
                })
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={mediumType}
              title={mediumLabel}
              isRequired
              placeholder={mediumPlaceholder}
              onBlur={() => {}}
              error={''}
              handleSelect={(item) =>
                handleChange({
                  key: 'medium',
                  value: item.name,
                  isNumericValue: false
                })
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={boardList}
              isRequired
              title={boardLabel}
              placeholder={boardPlaceholder}
              onBlur={() => {}}
              error={''}
              handleSelect={(item) =>
                handleChange({
                  key: 'board',
                  value: item.name,
                  isNumericValue: false
                })
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={schoolLabel}
              placeholder={schoolPlaceholder}
              value={school}
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'school',
                  value,
                  isNumericValue: false
                })
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={previousExamLabel}
              placeholder={previousExamPlaceholder}
              value={previousExamRegNo}
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'previousExamRegNo',
                  value,
                  isNumericValue: true
                })
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={yearOfPassingLabel}
              placeholder={yearOfPassingPlaceholder}
              value={yearOfPassing}
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'yearOfPassing',
                  value,
                  isNumericValue: true
                })
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={satsNoLabel}
              placeholder={satsPlaceholder}
              value={satsNo}
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'satsNo',
                  value,
                  isNumericValue: true
                })
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={obtainMarksLabel}
              placeholder={obtainMarksPlaceholder}
              value={obtainedMarks}
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'obtainedMarks',
                  value,
                  isNumericValue: true
                })
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={percentagelabel}
              placeholder={percentagePlaceholder}
              value={percentage}
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'percentage',
                  value,
                  isNumericValue: false
                })
              }}
              height="50px"
            />
          </DropdownWrapper>
        </FlexWrapper>
      </InfoWrapper>
    </PageWrapper>
  )
}

export default QualifyingExamDetails 