import { ReactElement } from 'react'
import { PageWrapper, DropdownWrapper, Input } from 'components'
import { InfoWrapper, FlexWrapper } from '../subcomponents'

const HealthInsurance = (): ReactElement => {
  return (
    <PageWrapper>
      <InfoWrapper>
        <FlexWrapper width="100%">
          <DropdownWrapper>
            <Input
              label={'Insurance Company'}
              placeholder={'Enter Insurance Company'}
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
              label={`Child's Insurance Number`}
              placeholder={`Enter Child's Insurance Number`}
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

export default HealthInsurance
