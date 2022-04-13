import { createSlice } from '@reduxjs/toolkit'
import { assetList, ledgerList, receiptViaList, depositList } from './const'
import { FinanceState } from './typings'

const initialState: FinanceState = {
  assetList,
  ledgerList,
  receiptViaList,
  depositList
}

export const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {}
})

export default financeSlice.reducer
