export interface DropdownListProps {
  name: string
  id: string
}

export interface EditableDropdownProps {
  isRequired?: boolean
  width?: string
  title?: string
  dropdownList: Array<DropdownListProps>
  placeholder: string
  //eslint-disable-next-line no-unused-vars
  handleSelect?: (item: any) => void
  onBlur?: () => void
  error?: string
  isDisabled?: boolean
  defaultValue?: DropdownListProps | null
  clearValue?: boolean
  isMultiChoice?: boolean
  //eslint-disable-next-line no-unused-vars
  handleMultiSelect?: (item: any) => void
  reset?: boolean
}

export interface EditDropdownWrapperProps {
  width?: string
  isDisabled?: boolean
}
