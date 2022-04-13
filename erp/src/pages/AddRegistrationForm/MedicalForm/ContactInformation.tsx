import { ReactElement } from 'react'
import { PageWrapper, DropdownWrapper, Input } from 'components'
import { InfoWrapper, FlexWrapper } from '../subcomponents'

const ContactInformation = (): ReactElement => {
  return (
    <PageWrapper>
      <InfoWrapper>
        <FlexWrapper width="100%">
          <DropdownWrapper>
            <Input
              label={'Home Address'}
              placeholder={'Enter Home Address'}
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
              label={'PO Box'}
              placeholder={'Enter PO Box'}
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
              label={'Home Phone'}
              placeholder={'Enter Home Phone'}
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
              label={'Father Name'}
              placeholder={'Enter Father Name'}
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
              label={`Father's Mobile No`}
              placeholder={`Enter Father's Mobile No`}
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
              label={`Father's Work Phone`}
              placeholder={`Enter Father's Work Phone`}
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
              label={'Mother Name'}
              placeholder={'Enter Mother Name'}
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
              label={`Mother's Mobile No`}
              placeholder={`Enter Mother's Mobile No`}
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
              label={`Mother's Work Phone`}
              placeholder={`Enter Mother's Work Phone`}
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

export default ContactInformation
