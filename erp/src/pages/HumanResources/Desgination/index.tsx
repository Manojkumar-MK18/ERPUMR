import { ReactElement, useEffect } from 'react'
import {
  Button,
  FlexWrapper,
  PageWrapper,
  SectionTitle,
  TableHeader,
  TableRow,
  TableWrapper
} from 'components'
import ROUTES from 'const/routes'
import { Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { GetDesginationListApi } from 'redux/Leave/api'
import { RootState } from 'redux/store'
import { tableHeader } from './const'

const DesginationList = (): ReactElement => {
  const {
    getDesginationList
  } = useSelector(
    (state: RootState) => ({
      getDesginationList: state.leave.getDesginationList
    }),
    shallowEqual
  )

  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetDesginationListApi())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      <FlexWrapper justifyContent='space-between'>
        <SectionTitle title='Desgination List' />
        <Button
          onClick={() => history.push(ROUTES.DESGINATION)}
        >
          Add Desgination
        </Button>
      </FlexWrapper>
      <>
        <TableWrapper>
          <Table size='sm' responsive="sm">
            <TableHeader>
              <TableRow>
                {tableHeader.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </TableRow>
            </TableHeader>
            <tbody>
              {getDesginationList.map((deslist, index) => {
                const {
                  designationName 
                } = deslist
                return (
                  <TableRow key={`des-${index}`}>
                    <td>{index + 1}</td>
                    <td>{designationName}</td>
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

export default DesginationList