import { ReactElement, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  PageWrapper,
  SectionTitle,
  FlexWrapper,
  TableWrapper,
  TableHeader,
  // TableFooter,
  TableRow,
  Icon,
  Button,
  Loader
} from 'components'
import Table from 'react-bootstrap/Table'
import { tableHeader } from './const'
import strings from 'locale/en'
import { useHistory } from 'react-router-dom'
import ROUTES from 'const/routes'
import { getFeeDescriptions, updateEditDescriptionId } from 'redux/fms/actions'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import { getCourses } from 'redux/academic/actions'

const FeeDescription = (): ReactElement => {
  const {
    fms: { feeDescriptionList: feeDescriptions, isLoading }
  } = useSelector((state: RootState) => state, shallowEqual)
  const {
    fms: {
      feeDescription: { feeDescriptionList }
    },
    button: { addFee }
  } = strings
  const history = useHistory()
  const dispatch = useDispatch()

  const handleAdd = () => {
    history.push(ROUTES.ADDFEEDESCRIPTION)
  }

  useEffect(() => {
    dispatch(getCourses())
    dispatch(getFeeDescriptions())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper id="container">
      <SectionTitle title={feeDescriptionList} />
      <FlexWrapper noPadding justifyContent="flex-end">
        <Button onClick={handleAdd}>{addFee}</Button>
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
                {feeDescriptions.map(({ description, title, id }, index) => {
                  return (
                    <TableRow key={`fee-description-${index}`}>
                      <td>{index + 1}</td>
                      <td>{description}</td>
                      <td>{title}</td>
                      <td>
                        <Icon
                          variant="outline-light"
                          onClick={() => {
                            dispatch(updateEditDescriptionId(id))
                            history.push(ROUTES.ADDFEEDESCRIPTION)
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
            {/* <TableFooter
              currentPage={1}
              totalPages={2}
              handleNext={() => {}}
              handlePrevious={() => {}}
            /> */}
          </TableWrapper>
        </div>
      )}
    </PageWrapper>
  )
}

export default FeeDescription
