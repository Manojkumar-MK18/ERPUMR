import { ReactElement, useEffect, useState } from 'react'
import {
  FlexWrapper,
  PageWrapper,
  SectionTitle,
  EditableDropdown,
  DropdownWrapper,
  TableWrapper,
  TableHeader,
  TableRow,
  Button,
  Icon,
  Loader
} from 'components'
import strings from 'locale/en'
import { Table } from 'react-bootstrap'
import { tableHeader, resetValues } from './const'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom'
import ROUTES from 'const/routes'
import { getCourses } from 'redux/academic/actions'
import {
  getFeeMaster,
  updateEditFeeMaster,
  updateTotalFeeDetails
} from 'redux/fms/actions'
import { AddFeeDescriptionResponse } from 'redux/fms/typings'

const FeeMaster = (): ReactElement => {
  const {
    acamedic: {
      academicYear: academicYearList,
      year: yearList,
      courseList,
      feeTypeList
    },
    fms: { feeMasterList, isLoading }
  } = useSelector((state: RootState) => state, shallowEqual)
  const {
    studentRegistration: {
      academicYear,
      year,
      childInformation: { selectCourse, course }
    },
    fms: {
      feeMaster: { feeList, addFeeMasterTitle },
      feeDescription: { selectFeeType, feeType }
    },
    button: { search }
  } = strings
  const dispatch = useDispatch()
  const history = useHistory()
  const [resetValuesState, setResetValuesState] = useState(resetValues)
  const [fees, setFees] = useState<Array<AddFeeDescriptionResponse>>([])
  const filteredList = fees.length > 0 ? fees : feeMasterList

  useEffect(() => {
    dispatch(getCourses())
    dispatch(getFeeMaster())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAdd = () => {
    history.push(ROUTES.ADD_FEE_MASTER)
  }

  const clearValues = () => {
    setResetValuesState({
      academicYear: true,
      year: true,
      feeType: true,
      course: true
    })
    setFees([])
  }

  return (
    <PageWrapper id="container">
      <SectionTitle title={feeList} />
      <FlexWrapper noPadding justifyContent="flex-end">
        <Button onClick={handleAdd}>{addFeeMasterTitle}</Button>
      </FlexWrapper>
      <FlexWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={academicYearList}
            title={academicYear}
            placeholder={academicYear}
            onBlur={() => { }}
            error={''}
            handleSelect={(item) => {
              setResetValuesState({
                ...resetValuesState,
                academicYear: false
              })
              const filteredFeeMasterList = filteredList.filter(
                (fee) => fee.academicYear === item.name
              )
              setFees(filteredFeeMasterList)
            }}
            reset={resetValuesState?.academicYear}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={yearList}
            title={year}
            placeholder={year}
            onBlur={() => { }}
            error={''}
            handleSelect={(item) => {
              setResetValuesState({
                ...resetValuesState,
                year: false
              })
              const filteredFeeMasterList = filteredList.filter(
                (fee) => fee.year === item.name
              )
              setFees(filteredFeeMasterList)
            }}
            reset={resetValuesState?.year}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={feeTypeList}
            title={selectFeeType}
            placeholder={feeType}
            onBlur={() => { }}
            error={''}
            handleSelect={(item) => {
              setResetValuesState({
                ...resetValuesState,
                feeType: false
              })
              const filteredFeeMasterList = filteredList.filter(
                (fee) => fee.title === item.name
              )
              setFees(filteredFeeMasterList)
              console.log(filteredFeeMasterList);

            }}
            reset={resetValuesState?.feeType}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={courseList}
            title={course}
            placeholder={selectCourse}
            onBlur={() => { }}
            error={''}
            handleSelect={(item) => {
              setResetValuesState({
                ...resetValuesState,
                course: false
              })
              const filteredFeeMasterList = filteredList.filter(
                (fee) => fee.courseId === item.id
              )
              setFees(filteredFeeMasterList)
              console.log(filteredFeeMasterList);

            }}
            reset={resetValuesState?.course}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Button onClick={() => { }}>{search}</Button>
          <Button onClick={clearValues}>{'clear'}</Button>
        </DropdownWrapper>
      </FlexWrapper>
      {isLoading ? (
        <Loader />
      ) : (
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
                {filteredList.map((feeMaster, index) => {
                  const { title, description, terms, amount, courseId } =
                    feeMaster
                  const selectedCourse = courseList.find(
                    (course) => course.id === courseId
                  )
                  return (
                    <TableRow key={`fee-master-${index}`}>
                      <td>{index + 1}</td>
                      <td>{title}</td>
                      <td>{description}</td>
                      <td>{selectedCourse?.name || courseId}</td>
                      <td>{terms}</td>
                      <td>{amount}</td>
                      <td>
                        <Icon
                          variant="outline-light"
                          onClick={() => {
                            dispatch(updateEditFeeMaster(feeMaster))
                            history.push(ROUTES.ADD_FEE_MASTER)
                            dispatch(updateTotalFeeDetails({
                              amount
                            }))
                          }}
                        >
                          <FontAwesomeIcon icon={['far', 'edit']} />
                        </Icon>
                      </td>
                    </TableRow>
                  )
                })}
              </tbody>
            </Table>
          </TableWrapper>
        </div>
      )}
    </PageWrapper>
  )
}

export default FeeMaster
