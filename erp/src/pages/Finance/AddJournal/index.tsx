import { ReactElement, useState } from 'react'
import {
  PageWrapper,
  SectionTitle,
  FlexWrapper,
  DropdownWrapper,
  EditableDropdown,
  Button,
  Input,
  TableWrapper,
  TableHeader,
  TableRow
} from 'components'
import strings from 'locale/en'
import SecondaryButton from 'react-bootstrap/Button'
import { DatePickerWrapper } from '../../subcomponents'
import DatePicker from 'react-datepicker'
import Table from 'react-bootstrap/Table'
import { tableHeader } from './const'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from 'redux/store'

const AddJournal = (): ReactElement => {
  const { ledgerList, assetList } = useSelector(
    (state: RootState) => state.finance,
    shallowEqual
  )

  const {
    finance: {
      addJournal,
      narration,
      groupName,
      amount,
      journal: { journalVoucher, journalDate },
      contra: { debitLedger, creditLedger }
    },
    button: { exit, add }
  } = strings
  const [journalDateText, setJournalDateText] = useState<string>(
    new Date().toDateString()
  )

  return (
    <PageWrapper id="container">
      <SectionTitle title={addJournal} hasBorder />
      <FlexWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={[]}
            title={journalVoucher}
            placeholder={journalVoucher}
            onBlur={() => {}}
            error={''}
            handleSelect={() => {}}
            isRequired
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <DatePickerWrapper>
            <DatePicker
              selected={new Date(journalDateText)}
              onSelect={(date) => setJournalDateText(date?.toDateString())}
              onChange={(date: Date) => {
                if (date) {
                  setJournalDateText(date?.toDateString())
                }
              }}
              placeholderText={journalDate}
              customInput={
                <Input
                  label={journalDate}
                  value={journalDateText}
                  inputType="text"
                  placeholder={journalDate}
                  onChange={(date) => setJournalDateText(date)}
                  suffix={['far', 'calendar']}
                />
              }
            />
          </DatePickerWrapper>
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
                    dropdownList={ledgerList}
                    placeholder={debitLedger}
                    onBlur={() => {}}
                    error={''}
                    handleSelect={() => {}}
                  />
                </td>
                <td>
                  <EditableDropdown
                    dropdownList={assetList}
                    placeholder={groupName}
                    onBlur={() => {}}
                    error={''}
                    handleSelect={() => {}}
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
                <td>
                  <EditableDropdown
                    dropdownList={ledgerList}
                    placeholder={creditLedger}
                    onBlur={() => {}}
                    error={''}
                    handleSelect={() => {}}
                  />
                </td>
                <td>
                  <EditableDropdown
                    dropdownList={assetList}
                    placeholder={groupName}
                    onBlur={() => {}}
                    error={''}
                    handleSelect={() => {}}
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
      <FlexWrapper justifyContent="center">
        <SecondaryButton variant="outline-secondary">{exit}</SecondaryButton>
        <Button onClick={() => {}}>{add}</Button>
      </FlexWrapper>
    </PageWrapper>
  )
}

export default AddJournal
