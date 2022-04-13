import { ReactElement } from 'react'
import { PageWrapper, EditableDropdown, DropdownWrapper } from 'components'
import { InfoWrapper, FlexWrapper } from '../subcomponents'

const Route = (): ReactElement => {
  return (
    <PageWrapper>
      <InfoWrapper>
        <FlexWrapper width="100%">
          <DropdownWrapper width="30%">
            <EditableDropdown
              dropdownList={[]}
              title={'Select Route'}
              placeholder={'Route'}
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

export default Route
