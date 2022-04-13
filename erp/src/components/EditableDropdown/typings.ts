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
  handleSelect: (arg: any) => void
  onBlur?: () => void
  error?: string
  isDisabled?: boolean
  defaultValue?: DropdownListProps | null
  reset?: boolean
}

export interface EditDropdownWrapperProps {
  width?: string
  isDisabled?: boolean
}
