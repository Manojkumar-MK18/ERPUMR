import { ReactElement } from 'react'
import {
  EditableDropdown,
  PageWrapper,
  DropdownWrapper,
  Input
} from 'components'
import { InfoWrapper, FlexWrapper } from '../subcomponents'

const MedicalInformation = (): ReactElement => {
  return (
    <PageWrapper>
      <InfoWrapper>
        <FlexWrapper width="100%">
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={[]}
              title={'Select Allergy'}
              placeholder={'Select'}
              onBlur={() => {}}
              error={''}
              handleSelect={() => {}}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={'Specify (if not there)'}
              value={''}
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value: string) => {
                console.log(value)
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={'Severity'}
              placeholder={'Enter Severity'}
              value={''}
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value: string) => {
                console.log(value)
              }}
              height="50px"
            />
          </DropdownWrapper>
        </FlexWrapper>
      </InfoWrapper>
    </PageWrapper>
  )
}

export default MedicalInformation
