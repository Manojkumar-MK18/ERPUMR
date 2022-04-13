import { ReactElement } from 'react'
import {
  PageWrapper,
  SectionTitle,
  FlexWrapper,
  EditableDropdown,
  DropdownWrapper,
  Input,
  Button
} from 'components'
import strings from 'locale/en'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from 'redux/store'
import SecondaryButton from 'react-bootstrap/Button'

const ApplicationReceipt = (): ReactElement => {
  const { ledgerList, receiptViaList, depositList } = useSelector(
    (state: RootState) => state.finance,
    shallowEqual
  )
  const {
    finance: {
      applicationReceipt,
      site,
      receiptLedger,
      receivedGroup,
      receivedAmount,
      receiptVia,
      depositListLabel,
      cheque,
      bank,
      bankCharges,
      depositedBank,
      narration,
      applicationName
    },
    button: { save, exit }
  } = strings
  return (
    <PageWrapper id="container">
      <SectionTitle title={applicationReceipt} hasBorder />
      <FlexWrapper>
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
          <EditableDropdown
            dropdownList={ledgerList}
            title={receiptLedger}
            placeholder={receiptLedger}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
            isRequired
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
            isRequired
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
            dropdownList={receiptViaList}
            title={receiptVia}
            placeholder={receiptVia}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
            isRequired
            isDisabled
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={depositList}
            title={depositListLabel}
            placeholder={depositListLabel}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
            isRequired
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
            isDisabled
          />
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
            isDisabled
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
            isDisabled
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
            isRequired
            isDisabled
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            label={narration}
            placeholder={narration}
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
          <Input
            label={applicationName}
            placeholder={applicationName}
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
      </FlexWrapper>
      <FlexWrapper justifyContent="center">
        <SecondaryButton variant="outline-secondary">{exit}</SecondaryButton>
        <Button onClick={() => {}}>{save}</Button>
      </FlexWrapper>
    </PageWrapper>
  )
}

export default ApplicationReceipt
