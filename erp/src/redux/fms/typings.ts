import { Dropdown } from '../typings'

export type DropdownList = Array<Dropdown>

export interface AddFeeDescriptionResponse {
  id: number
  description: string
  title: string
  amount?: string
  terms?: string
  courseId?: string
  academicYear?: string
  year?: string
}

export interface AddFeeDescriptionState {
  feeDescriptionList: Array<AddFeeDescriptionResponse>
  isLoading: boolean
  editDescriptionId: number
  feeMasterList: Array<AddFeeDescriptionResponse>
  editFeeMaster: AddFeeDescriptionResponse | null
}

export interface AddFeeMasterPayload {
  id?: string
  title: string
  description: string
  terms: string
  academicYear: string
  year: string
  courseId: string
  amount: string
  regType: string
}

export interface AddFeeDescriptionPayload {
  title: string
  description: string
}
