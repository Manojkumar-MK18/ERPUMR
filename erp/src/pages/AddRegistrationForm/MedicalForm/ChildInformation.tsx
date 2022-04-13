import { ReactElement } from 'react'
import {
  PageWrapper,
  EditableDropdown,
  DropdownWrapper,
  Input
} from 'components'
import { InfoWrapper, FlexWrapper } from '../subcomponents'

const ChildInformation = (): ReactElement => {
  return (
    <PageWrapper>
      <InfoWrapper>
        <FlexWrapper width="100%">
          <DropdownWrapper>
            <Input
              label={'Student First Name'}
              placeholder={'First Name'}
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
              label={'Student Middle Name'}
              placeholder={'Middle Name'}
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
              label={'Student Last Name'}
              placeholder={'Last Name'}
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
              label={'Select Date Of Birth'}
              placeholder={'Date Of Birth'}
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
            <EditableDropdown
              dropdownList={[]}
              title={'Select Gender'}
              placeholder={'Gender'}
              onBlur={() => {}}
              error={''}
              handleSelect={() => {}}
            />
          </DropdownWrapper>
        </FlexWrapper>
      </InfoWrapper>
    </PageWrapper>
  )
}

export default ChildInformation
