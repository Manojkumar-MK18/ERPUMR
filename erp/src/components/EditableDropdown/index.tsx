import { useEffect, useState } from 'react'
import { DropdownButton, Dropdown, FormControl } from 'react-bootstrap'
import {
  ListInput,
  DropdownInput,
  EditDropdownWrapper,
  Title
} from './subcomponents'
import { EditableDropdownProps } from './typings'

const EditableDropdown = ({
  isRequired,
  width,
  title,
  dropdownList,
  placeholder,
  handleSelect,
  onBlur,
  error,
  isDisabled,
  defaultValue,
  reset
}: EditableDropdownProps) => {
  const { name, id } = defaultValue || {}
  const [selectdItem, setSelectedItem] = useState({
    name: name || '',
    id: id || ''
  })

  useEffect(() => {
    if (reset) {
      setSelectedItem({
        name: '',
        id: ''
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset])

  return (
    <EditDropdownWrapper
      width={width}
      isDisabled={isDisabled}
      id="editable-dropdown"
    >
      {title && (
        <Title>
          {`${title}`}
          {isRequired && <strong>*</strong>}
        </Title>
      )}
      <ListInput>
        <DropdownInput
          readOnly
          placeholder={placeholder}
          aria-label={placeholder}
          onBlur={() => onBlur && onBlur()}
          value={selectdItem.name}
          isValid={!error && !!selectdItem.name}
          isInvalid={!!error}
        />

        <DropdownButton
          variant="outline-secondary"
          title=""
          id="dropdown-id"
          align="end"
          onSelect={(eventKey) => {
            const value = dropdownList[Number(eventKey)]
            setSelectedItem(value)
            handleSelect(value)
          }}
        >
          {dropdownList.map((item, index) => (
            <Dropdown.Item eventKey={index} key={`dropdown-${index}`}>
              {item.name}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
      </ListInput>
    </EditDropdownWrapper>
  )
}

export default EditableDropdown
