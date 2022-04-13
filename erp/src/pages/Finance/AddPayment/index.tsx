import { ReactElement, useState } from 'react'
import {
  PageWrapper,
  SectionTitle,
  FlexWrapper,
  DropdownWrapper,
  EditableDropdown,
  Input,
  TableWrapper,
  TableHeader,
  TableRow,
  Button
} from 'components'
import strings from 'locale/en'
import DatePicker from 'react-datepicker'
import { DatePickerWrapper } from '../../subcomponents'
import Table from 'react-bootstrap/Table'
import { tableHeader } from './const'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from 'redux/store'
import SecondaryButton from 'react-bootstrap/Button'

const AddPayment = (): ReactElement => {
  const { receiptViaList, ledgerList } = useSelector(
    (state: RootState) => state.finance,
    shallowEqual
  )
  const [paymentdate, setPaymentDate] = useState<string>(
    new Date().toDateString()
  )
  const [chequeDateText, setChequeDateText] = useState<string>(
    new Date().toDateString()
  )
  const {
    finance: {
      addPayment,
      site,
      godOwnName,
      amount,
      totalAmountPaid,
      receiptVia,
      cheque,
      chequeDate,
      bankCharges,
      ledgerOrBankName,
      netAmount,
      narration
    },
    addReceipt: { voucherNo },
    fms: {
      feeReceipt: { date }
    },
    button: { save, exit }
  } = strings

  return (
    <PageWrapper id="container">
      <SectionTitle title={addPayment} hasBorder />
      <FlexWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={[]}
            title={voucherNo}
            placeholder={voucherNo}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={[]}
            title={site}
            placeholder={site}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            label={godOwnName}
            placeholder={godOwnName}
            value={''}
            onBlur={() => {}}
            error={''}
            width="100%"
            onChange={(value: string) => {
              console.log(value)
            }}
            height="50px"
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <DatePickerWrapper>
            <DatePicker
              selected={new Date(paymentdate)}
              onSelect={(date) => setPaymentDate(date?.toDateString())}
              onChange={(date: Date) => {
                if (date) {
                  setPaymentDate(date?.toDateString())
                }
              }}
              placeholderText={date}
              customInput={
                <Input
                  label={date}
                  value={paymentdate}
                  inputType="text"
                  placeholder={date}
                  onChange={(date) => setPaymentDate(date)}
                  suffix={['far', 'calendar']}
                />
              }
            />
          </DatePickerWrapper>
        </DropdownWrapper>
      </FlexWrapper>
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
              <TableRow>
                <td>{'1'}</td>
                <td>
                  <EditableDropdown
                    dropdownList={[]}
                    placeholder={voucherNo}
                    onBlur={() => {}}
                    error={''}
                    handleSelect={() => {}}
                  />
                </td>
                <td>
                  <Input
                    placeholder={godOwnName}
                    value={''}
                    onBlur={() => {}}
                    error={''}
                    width="100%"
                    onChange={(value: string) => {
                      console.log(value)
                    }}
                    height="50px"
                  />
                </td>
                <td>
                  <Input
                    placeholder={amount}
                    value={''}
                    onBlur={() => {}}
                    error={''}
                    width="100%"
                    onChange={(value: string) => {
                      console.log(value)
                    }}
                    height="50px"
                  />
                </td>
              </TableRow>
            </tbody>
          </Table>
        </TableWrapper>
      </div>
      <FlexWrapper>
        <DropdownWrapper>
          <Input
            label={totalAmountPaid}
            placeholder={totalAmountPaid}
            value={'0'}
            onBlur={() => {}}
            error={''}
            width="100%"
            onChange={(value: string) => {
              console.log(value)
            }}
            height="50px"
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={receiptViaList}
            title={receiptVia}
            placeholder={receiptVia}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            label={cheque}
            placeholder={cheque}
            value={''}
            onBlur={() => {}}
            error={''}
            width="100%"
            onChange={(value: string) => {
              console.log(value)
            }}
            height="50px"
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <DatePickerWrapper>
            <DatePicker
              selected={new Date(chequeDateText)}
              onSelect={() => {}}
              onChange={(date: Date) => {
                setChequeDateText(date.toDateString())
              }}
              placeholderText={chequeDate}
              customInput={
                <Input
                  label={chequeDate}
                  value={chequeDateText}
                  inputType="text"
                  placeholder={chequeDate}
                  onChange={(date) => setChequeDateText(date)}
                  suffix={['far', 'calendar']}
                />
              }
            />
          </DatePickerWrapper>
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            label={bankCharges}
            placeholder={bankCharges}
            value={''}
            onBlur={() => {}}
            error={''}
            width="100%"
            onChange={(value: string) => {
              console.log(value)
            }}
            height="50px"
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={ledgerList}
            title={ledgerOrBankName}
            placeholder={ledgerOrBankName}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
            isRequired
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            label={netAmount}
            placeholder={netAmount}
            value={''}
            onBlur={() => {}}
            error={''}
            width="100%"
            onChange={(value: string) => {
              console.log(value)
            }}
            height="50px"
          />
        </DropdownWrapper>
      </FlexWrapper>
      <FlexWrapper noPadding>
        <DropdownWrapper width="75%">
          <Input
            label={narration}
            placeholder={narration}
            value={''}
            onBlur={() => {}}
            error={''}
            onChange={(value: string) => {
              console.log(value)
            }}
            inputType="textarea"
            isRequired
          />
        </DropdownWrapper>
      </FlexWrapper>
      <FlexWrapper justifyContent="center">
        <SecondaryButton variant="outline-secondary">{exit}</SecondaryButton>
        <Button onClick={() => {}}>{save}</Button>
      </FlexWrapper>
    </PageWrapper>
  )
}

export default AddPayment
