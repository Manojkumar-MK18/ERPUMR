import { AddFeeDescriptionResponse } from 'redux/fms/typings'

interface DropdownListProps {
  name: string
  id: string
}

const getDescriptionDropdown = (
  descriptions: Array<AddFeeDescriptionResponse>
): Array<DropdownListProps> => {
  const descriptionList = descriptions.map(
    (description: AddFeeDescriptionResponse) => ({
      id: `${description?.id}`,
      name: description?.description
    })
  )
  return descriptionList
}

export default getDescriptionDropdown
