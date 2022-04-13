import { ReactElement, useState } from 'react'
import {
  PageWrapper,
  SectionTitle,
  FlexWrapper,
  EditableDropdown,
  DropdownWrapper,
  Button,
  Input
} from 'components'
import strings from 'locale/en'
import SecondaryButton from 'react-bootstrap/Button'
import DatePicker from 'react-datepicker'
import { DatePickerWrapper } from '../../subcomponents'

const AddReceipt = (): ReactElement => {
  const [receiptDateText, setReceiptDateText] = useState<string>(
    new Date().toDateString()
  )
  const [chequeDateText, setChequeDateText] = useState<string>(
    new Date().toDateString()
  )

  const {
    addReceipt: { title, voucherNo, school },
    finance: {
      receiptDate,
      receiptLedger,
      receivedGroup,
      receivedAmount,
      receiptVia,
      depositBank,
      cheque,
      chequeDate,
      bank,
      bankCharges,
      depositedBank,
      narration
    },
    button: { save, exit }
  } = strings
  return (
    <PageWrapper id="container">
      <SectionTitle title={title} hasBorder />
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
            title={school}
            placeholder={school}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <DatePickerWrapper>
            <DatePicker
              selected={new Date(receiptDateText)}
              onSelect={() => {}}
              onChange={(date: Date) => {
                setReceiptDateText(date.toDateString())
              }}
              placeholderText={receiptDate}
              customInput={
                <Input
                  label={receiptDate}
                  value={receiptDateText}
                  inputType="text"
                  placeholder={receiptDate}
                  onChange={(date) => setReceiptDateText(date)}
                  suffix={['far', 'calendar']}
                />
              }
            />
          </DatePickerWrapper>
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={[]}
            title={receiptLedger}
            placeholder={receiptLedger}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={[]}
            title={receivedGroup}
            placeholder={receivedGroup}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            label={receivedAmount}
            placeholder={receivedAmount}
            value={''}
            onBlur={() => {}}
            error={''}
            width="100%"
            onChange={(value: string) => {
              console.log(value)
            }}
            height="50px"
            isRequired
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={[]}
            title={receiptVia}
            placeholder={receiptVia}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={[]}
            title={depositBank}
            placeholder={depositBank}
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
            label={bank}
            placeholder={bank}
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
            dropdownList={[]}
            title={depositedBank}
            placeholder={depositedBank}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
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

export default AddReceipt
