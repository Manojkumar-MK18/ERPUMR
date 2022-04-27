import { ReactElement, useEffect } from 'react'
import {
  PageWrapper,
  SectionTitle,
  TableWrapper,
  TableHeader,
  TableRow,
  Button,
  FlexWrapper,
  Icon
} from 'components'
import { Table } from 'react-bootstrap'
import { tableHeader } from './const'
import { useHistory } from 'react-router-dom'
import ROUTES from 'const/routes'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { GetStaffListApi } from 'redux/Leave/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { updateStaffDetails } from 'redux/Leave/action'
import strings from 'locale/en'

const StaffRegistration = (): ReactElement => {
  const {
    getStaffList
  } = useSelector(
    (state: RootState) => ({
      getStaffList: state.leave.getStaffList
    }),
    shallowEqual
  )

  const {
    staffRegistration: {
      title,
      addStaff
    }
  } = strings

  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetStaffListApi())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper id="container">
      <FlexWrapper justifyContent='space-between'>
        <SectionTitle title={title} />
        <Button
          onClick={() => {
            history.push(ROUTES.ADDSTAFFREGISTRATION)
          }}
        >
          {addStaff}
        </Button>
      </FlexWrapper>
      <>
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
              {getStaffList.map((staffList, index) => {
                const {
                  firstName,
                  lastName,
                  department,
                  qualification,
                  technical_flag
                } = staffList
                return (
                  <TableRow key={`staff-${index}`}>
                    <td>{index + 1}</td>
                    <td>{`${firstName}${lastName}`}</td>
                    <td>{technical_flag}</td>
                    <td>{department}</td>
                    <td>{qualification}</td>
                    <td>
                      <Icon onClick={() => {
                        dispatch(updateStaffDetails(staffList))
                        history.push(ROUTES.STAFF_VIEW)
                      }}>
                        <FontAwesomeIcon icon={['far', 'eye']} />
                      </Icon>
                    </td>
                  </TableRow>
                )
              })}

            </tbody>
          </Table>
        </TableWrapper>
      </>
    </PageWrapper>
  )
}

export default StaffRegistration
