import { ReactElement, useState } from 'react'
import {
  PageWrapper,
  SectionTitle,
  FlexWrapper,
  DropdownWrapper,
  EditableDropdown,
  Input,
  Button
} from 'components'
import strings from 'locale/en'
import DatePicker from 'react-datepicker'
import { DatePickerWrapper } from '../../subcomponents'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from 'redux/store'
import SecondaryButton from 'react-bootstrap/Button'
import { ContraWrapper } from './subcomponents'

const AddContra = (): ReactElement => {
  const { ledgerList } = useSelector(
    (state: RootState) => state.finance,
    shallowEqual
  )
  const [paymentdate, setPaymentDate] = useState<string>(
    new Date().toDateString()
  )

  const {
    finance: {
      addContra,
      narration,
      contra: {
        contraNumber,
        debit,
        debitLedger,
        debitGroup,
        debitAmount,
        debitChequeNo,
        credit,
        creditAmount,
        creditChequeNo,
        creditGroup,
        creditLedger
      },
      receiptDate
    },
    button: { exit, add }
  } = strings

  return (
    <PageWrapper id="container">
      <SectionTitle title={addContra} hasBorder />
      <FlexWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={[]}
            title={contraNumber}
            placeholder={contraNumber}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
            isRequired
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
              placeholderText={receiptDate}
              customInput={
                <Input
                  label={receiptDate}
                  value={paymentdate}
                  inputType="text"
                  placeholder={receiptDate}
                  onChange={(date) => setPaymentDate(date)}
                  suffix={['far', 'calendar']}
                />
              }
            />
          </DatePickerWrapper>
        </DropdownWrapper>
      </FlexWrapper>
      <FlexWrapper justifyContent="space-between">
        <ContraWrapper>
          <SectionTitle title={debit} hasBorder />
          <FlexWrapper width="100%">
            <DropdownWrapper width="40%">
              <EditableDropdown
                dropdownList={ledgerList}
                title={debitLedger}
                placeholder={debitLedger}
                onBlur={() => {}}
                error={''}
                handleSelect={() => {}}
              />
            </DropdownWrapper>
            <DropdownWrapper width="40%">
              <EditableDropdown
                dropdownList={[]}
                title={debitGroup}
                placeholder={debitGroup}
                onBlur={() => {}}
                error={''}
                handleSelect={() => {}}
              />
            </DropdownWrapper>
            <DropdownWrapper width="40%">
              <Input
                label={debitAmount}
                placeholder={debitAmount}
                value={''}
                onBlur={() => {}}
                error={''}
                onChange={(value: string) => {
                  console.log(value)
                }}
              />
            </DropdownWrapper>
            <DropdownWrapper width="40%">
              <Input
                label={debitChequeNo}
                placeholder={debitChequeNo}
                value={''}
                onBlur={() => {}}
                error={''}
                onChange={(value: string) => {
                  console.log(value)
                }}
              />
            </DropdownWrapper>
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
        </ContraWrapper>
        <ContraWrapper>
          <SectionTitle title={credit} hasBorder />
          <FlexWrapper width="100%">
            <DropdownWrapper width="40%">
              <EditableDropdown
                dropdownList={ledgerList}
                title={creditLedger}
                placeholder={creditLedger}
                onBlur={() => {}}
                error={''}
                handleSelect={() => {}}
              />
            </DropdownWrapper>
            <DropdownWrapper width="40%">
              <EditableDropdown
                dropdownList={[]}
                title={creditGroup}
                placeholder={creditGroup}
                onBlur={() => {}}
                error={''}
                handleSelect={() => {}}
              />
            </DropdownWrapper>
            <DropdownWrapper width="40%">
              <Input
                label={creditAmount}
                placeholder={creditAmount}
                value={''}
                onBlur={() => {}}
                error={''}
                onChange={(value: string) => {
                  console.log(value)
                }}
              />
            </DropdownWrapper>
            <DropdownWrapper width="40%">
              <Input
                label={creditChequeNo}
                placeholder={creditChequeNo}
                value={''}
                onBlur={() => {}}
                error={''}
                onChange={(value: string) => {
                  console.log(value)
                }}
              />
            </DropdownWrapper>
          </FlexWrapper>
        </ContraWrapper>
      </FlexWrapper>

      <FlexWrapper justifyContent="center">
        <SecondaryButton variant="outline-secondary">{exit}</SecondaryButton>
        <Button onClick={() => {}}>{add}</Button>
      </FlexWrapper>
    </PageWrapper>
  )
}

export default AddContra
