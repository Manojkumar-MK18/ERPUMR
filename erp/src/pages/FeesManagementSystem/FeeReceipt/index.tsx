import { ReactElement, useState } from 'react'
import {
  PageWrapper,
  FlexWrapper,
  SectionTitle,
  DropdownWrapper,
  Input,
  Button,
  TableWrapper,
  TableHeader,
  TableRow,
  Icon,
} from 'components'
import strings from 'locale/en'
import { Table } from 'react-bootstrap'
import { tableHeader } from './const'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import { fetchReceiptlist } from 'redux/fms/api'
import { useHistory } from 'react-router-dom'
import ROUTES from 'const/routes'

const FeeReceipt = (): ReactElement => {

  const {
    fms: {
      feeReceipt: { receipt }
    }
  } = strings

  const dispatch = useDispatch()
  const history = useHistory()

  const [receiptId, setReceiptId] = useState('')
  console.log(receiptId);

  return (
    <PageWrapper id="container">
      <SectionTitle title={receipt} />
      <FlexWrapper>
        <DropdownWrapper>
          <Input
            value={receiptId}
            label='Receipt Id'
            placeholder='Enter Receipt ID'
            onChange={(value: string) => {
              setReceiptId(value)
            }}
          />
        </DropdownWrapper>
        <Button
          onClick={() => {
            dispatch(fetchReceiptlist({
              studentId: receiptId
            }))
          }}
          style={{ marginTop: '25px' }}
        >Search</Button>
      </FlexWrapper>
      <>
        <TableWrapper>
          <Table size='sm' responsive="sm">
            <TableHeader>
              <TableRow>
                {tableHeader.map((header, index) => (
                  <th key={`receipt-${index}`}>{header}</th>
                ))}
              </TableRow>
            </TableHeader>
            <tbody>
              <TableRow>
                <td>1</td>
                <td>Fee receipt number</td>
                <td>Student Name</td>
                <td>Father Name</td>
                <td>Course</td>
                <td>Amount </td>
                <td>Parent Mobile number</td>
                <td>
                  <Icon
                    variant='outline-secondary'
                    onClick={() => {
                      history.push(ROUTES.RECEIPTPRINT)
                    }}
                  >
                    <FontAwesomeIcon icon={['far', 'eye']} />
                  </Icon>
                </td>
              </TableRow>
            </tbody>
          </Table>
        </TableWrapper>
      </>
    </PageWrapper>
  )
}

export default FeeReceipt
