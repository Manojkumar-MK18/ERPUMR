import { ReactElement } from 'react'
import InputGroup from 'react-bootstrap/esm/InputGroup'
import styled from 'styled-components'
import { Body } from 'typography'
import CheckBoxProps from './typings'

export const StyledCheckBox = styled(InputGroup.Checkbox)``

export const CheckboxWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  margin: 0;
`

const CheckBox = ({ title, handleSelect }: CheckBoxProps): ReactElement => {
  return (
    <CheckboxWrapper>
      <Body hasPadding>{title}</Body>
      <StyledCheckBox onChange={handleSelect} />
    </CheckboxWrapper>
  )
}

export default CheckBox
