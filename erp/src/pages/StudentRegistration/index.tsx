/* eslint-disable no-unused-vars */
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
  TabWrapper,
  TableFooter,
  Loader,
  Modal,
  Input
} from 'components'
import Tabs from 'react-bootstrap/esm/Tabs'
import Tab from 'react-bootstrap/esm/Tab'
import { ActionWrapper } from './subcomponents'
import { Table } from 'react-bootstrap'
import { tableHeader } from './const'
import { useHistory } from 'react-router-dom'
import ROUTES from 'const/routes'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import { getStudentAdmissionList, addFeePayment, updateStudentDetails, updatePaymentMode, updateFeeDetails } from 'redux/fms/actions'
import { getCourses } from 'redux/academic/actions'
import { resetValues } from './const'
import { Student } from 'redux/fms/typings'
import Pay from './Pay'
import strings from 'locale/en'
import { initialPaymentValues } from './const'

const StudentRegistartion = (): ReactElement => {
  const {
    acamedic: { academicYear: academicYearList, year: yearList, courseList },
    fms: { studentApplicationList, isLoading, selectedFeetotalDetails },
    cashierName
  } = useSelector((state: RootState) => ({
    acamedic: state.acamedic,
    fms: state.fms,
    cashierName: state.user.userInfo?.userDetail.firstName
  }), shallowEqual)
  const {
    studentRegistration: {
      registration,
      academicYear,
      year,
      addRegistration,
      applicationList,
      admittedList,
      onlineApplication,
      childInformation: { selectCourse, course }
    },
    button: { clear }
  } = strings
  const history = useHistory()
  const dispatch = useDispatch()

  const {
    content = [],
    totalPages = 0,
    page = 0
  } = studentApplicationList || {}

  const [payId, setPayId] = useState('')
  const [values, setValues] = useState(initialPaymentValues)
  const [resetValuesState, setResetValuesState] = useState(resetValues)
  const [registrationList, setRegistrationList] = useState<Array<Student>>([])
  const filteredList = registrationList.length > 0 ? registrationList : content
  const [searchTerm, setSearchTerm] = useState('')

  console.log(filteredList);
  console.log(registrationList);

  const clearValues = () => {
    setResetValuesState({
      academicYear: true,
      year: true,
      course: true
    })
    setRegistrationList([])
  }

  const canSubmit =
    !!values?.feeType &&
    !!values?.description &&
    !!values?.term &&
    !!values?.amount &&
    !!values?.paymentMode

  useEffect(() => {
    dispatch(getStudentAdmissionList(1))
    dispatch(getCourses())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper id="container">
      <SectionTitle title={registration} />
      <FlexWrapper>
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

              const filteredRegistrationList = filteredList?.filter(
                (registration) => registration.courseId === item.id
              )
              setRegistrationList(filteredRegistrationList || [])
            }}
            reset={resetValuesState?.course}
          />
        </DropdownWrapper>
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

              const filteredRegistrationList = filteredList?.filter(
                (registration) => registration.academicYear === item.name
              )
              setRegistrationList(filteredRegistrationList || [])
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
              const filteredRegistrationList = filteredList?.filter(
                (registration) => registration.yearOfPassing === item.name
              )
              setRegistrationList(filteredRegistrationList || [])
            }}
            reset={resetValuesState?.year}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Button
            onClick={() => {
              history.push(ROUTES.ADDREGISTRATION)
            }}
          >
            {addRegistration}
          </Button>
        </DropdownWrapper>
        <DropdownWrapper>
          <Button onClick={clearValues}>{clear}</Button>
        </DropdownWrapper>
      </FlexWrapper>
      <FlexWrapper justifyContent='end' noPadding>
        <Input
          value={searchTerm}
          width="30%"
          placeholder={'Search '}
          onChange={(value: string) => {
            setSearchTerm(value)
          }}
        />
      </FlexWrapper>
      <TabWrapper>
        <Tabs
          defaultActiveKey="applicationList"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="applicationList" title={applicationList}></Tab>
          <Tab
            eventKey="onlineApplication"
            title={onlineApplication}
            disabled
          ></Tab>
          <Tab eventKey="admittedList" title={admittedList} disabled></Tab>
        </Tabs>
      </TabWrapper>
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
                {filteredList.filter((values) => {
                  if (searchTerm === "") {
                    return values
                  } else if (
                    values.studentName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    values.admissionNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    values.mobileNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    values.fatherName?.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return values
                  }
                }).map(({
                  studentName = '',
                  courseId = '',
                  regNo,
                  admissionNumber,
                  userId = '',
                  mobileNumber,
                  fatherName,
                  coachingCentre,
                },
                  index
                ) => {
                  const selectedCourse = courseList.find(
                    (course) => course.id === courseId
                  )
                  return (
                    <TableRow key={index}>
                      <td>{index + 1}</td>
                      <td>{studentName}</td>
                      <td>{selectedCourse?.name || coachingCentre?.coachingCentreName}</td>
                      <td>{admissionNumber}</td>
                      <td>
                        <ActionWrapper
                          handlePay={() => {
                            setPayId(userId)
                            dispatch(updateStudentDetails({
                              studentName: studentName,
                              regNo: regNo,
                              mobileNumber: mobileNumber,
                              fatherName: fatherName,
                              coachingCentre: coachingCentre?.coachingCentreName
                            }))
                          }}
                        />
                      </td>
                    </TableRow>
                  )
                })}
              </tbody>
            </Table>
            <TableFooter
              currentPage={page}
              totalPages={totalPages}
              handleNext={() => {
                dispatch(getStudentAdmissionList(page + 1))
              }}
              handlePrevious={() => {
                dispatch(getStudentAdmissionList(page - 1))
              }}
            />
          </TableWrapper>
        </div>
      )}
      {payId && (
        <Modal
          title={strings.pay.title}
          isLargeModal={true}
          handleSubmit={() => {
            setPayId('')
            const payload = {
              studentId: payId,
              paid: 'paid',
              amount: values?.amount,
              referenceId: values?.referenceId,
              modeOfPayment: values?.paymentMode,
              description: values?.description,
              paidTypes: [values?.feeType],
              date: values?.dateOn,
              balance: Number(selectedFeetotalDetails?.amount) - Number(values?.amount),
              cashier: cashierName,
              bankName: values?.bankName,
              status: 'ACTIVE'
            }
            dispatch(addFeePayment(payload))
            dispatch(updatePaymentMode({
              cash: values?.paymentMode,
              dateOn: values?.dateOn
            }))
            dispatch(updateFeeDetails({
              amount: values?.amount
            }))
            dispatch(getStudentAdmissionList(1))
          }}
          handleCancel={() => setPayId('')}
          isDisabled={!canSubmit}
        >
          <Pay values={values} setValues={setValues} />
        </Modal>
      )}
    </PageWrapper>
  )
}

export default StudentRegistartion
