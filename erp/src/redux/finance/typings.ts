import { Dropdown } from '../typings'

export type DropdownList = Array<Dropdown>

export interface FinanceState {
  assetList: DropdownList
  ledgerList: DropdownList
  receiptViaList: DropdownList
  depositList: DropdownList
}
