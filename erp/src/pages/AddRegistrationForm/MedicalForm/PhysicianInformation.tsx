import { ReactElement } from 'react'
import { PageWrapper, DropdownWrapper, Input } from 'components'
import { InfoWrapper, FlexWrapper } from '../subcomponents'

const PhysicianInformation = (): ReactElement => {
  return (
    <PageWrapper>
      <InfoWrapper>
        <FlexWrapper width="100%">
          <DropdownWrapper>
            <Input
              label={'Physician Name'}
              placeholder={'Enter Physician Name'}
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
              label={'Clinic/Hospital'}
              placeholder={'Enter Clinic/Hospital Name'}
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
              label={'Telephone Number'}
              placeholder={'Enter Telephone Number'}
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
              label={'Mobile Number'}
              placeholder={'Enter Mobile Number'}
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

export default PhysicianInformation
