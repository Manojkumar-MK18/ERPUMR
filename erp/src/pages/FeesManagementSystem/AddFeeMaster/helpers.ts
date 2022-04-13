import { DropdownList } from './typings'
import { AddFeeDescriptionResponse } from 'redux/fms/typings'

const getFeeDescriptionDropdown = (
  feeDescriptions: Array<AddFeeDescriptionResponse>,
  feeType?: string
): DropdownList => {
  const descriptionList = feeDescriptions.map(
    (fee: AddFeeDescriptionResponse) => ({
      id: `${fee?.id}`,
      name: fee?.description,
      type: fee?.title
    })
  )

  if (feeType) {
    return descriptionList.filter((description) => {
      return description.type === feeType
    })
  }
  return descriptionList
}

export default getFeeDescriptionDropdown
