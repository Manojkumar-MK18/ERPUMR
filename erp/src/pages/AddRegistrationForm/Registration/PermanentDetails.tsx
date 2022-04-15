import { ReactElement } from 'react'
import {
  PageWrapper,
  DropdownWrapper,
  Input,
  EditableDropdown,
  CheckBox
} from 'components'
import { InfoWrapper, FlexWrapper } from '../subcomponents'
import strings from 'locale/en'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import { updatePermanentDetails } from 'redux/studentRegistration/actions'
import isNumeric from 'helpers/isNumeric'
import { HandleChangeOptions } from './typings'

const PermanentDetails = (): ReactElement => {
  const {
    permanentDetails: {
      addressPermenent,
      emailPermenent,
      mobileNumberPermenent,
      parentMobileNumberPermenent,
      districtPermenent,
      cityPermenent,
      talukPermenent,
      countryPermenent,
      postalPermenent,
      isSameAsCommunicationAddress
    },
    stateList
  } = useSelector(
    (state: RootState) => ({
      permanentDetails: state.studentRegistration.studentRegistration,
      stateList: state.acamedic.stateList
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  const {
    studentRegistration: {
      communicationDetails: {
        addressLabel,
        addressPlaceholder,
        mobileNumberLabel,
        mobileNumberPlaceholder,
        parentMobileNumberLabel,
        parentMobileNumberPlaceholder,
        emailLabel,
        emailPlaceholder,
        stateLabel,
        statePlaceholder,
        districtLabel,
        districtPlaceholder,
        talukLabel,
        talukPlaceholder,
        cityLabel,
        cityPlaceholder,
        countryLabel,
        countryPlaceholder,
        postalLabel,
        postalPlaceholder,
        permanentAddressSameAsCommunication
      }
    }
  } = strings

  const handleChange = ({
    key,
    value,
    isNumericValue
  }: HandleChangeOptions) => {
    if ((isNumericValue && isNumeric(value)) || !isNumericValue) {
      dispatch(updatePermanentDetails({ [key]: value }))
    }
  }

  return (
    <PageWrapper>
      <FlexWrapper width="50%">
        <CheckBox
          title={permanentAddressSameAsCommunication}
          handleSelect={() => {
            dispatch(
              updatePermanentDetails({
                isSameAsCommunicationAddress: !isSameAsCommunicationAddress
              })
            )
          }}
        />
      </FlexWrapper>
      <InfoWrapper>
        <FlexWrapper width="100%">
          <DropdownWrapper>
            <Input
              label={addressLabel}
              placeholder={addressPlaceholder}
              value={addressPermenent}
              isRequired
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'addressPermenent',
                  value,
                  isNumericValue: false
                })
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={emailLabel}
              isRequired
              placeholder={emailPlaceholder}
              value={emailPermenent}
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'emailPermenent',
                  value,
                  isNumericValue: false
                })
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={mobileNumberLabel}
              placeholder={mobileNumberPlaceholder}
              value={mobileNumberPermenent}
              isRequired
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'mobileNumberPermenent',
                  value,
                  isNumericValue: true
                })
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={parentMobileNumberLabel}
              placeholder={parentMobileNumberPlaceholder}
              value={parentMobileNumberPermenent}
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'parentMobileNumberPermenent',
                  value,
                  isNumericValue: true
                })
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={stateList}
              isRequired
              title={stateLabel}
              placeholder={statePlaceholder}
              onBlur={() => {}}
              error={''}
              handleSelect={(item) =>
                handleChange({
                  key: 'statePermenent',
                  value: item.name,
                  isNumericValue: false
                })
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={districtLabel}
              isRequired
              placeholder={districtPlaceholder}
              value={districtPermenent}
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'districtPermenent',
                  value,
                  isNumericValue: false
                })
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={talukLabel}
              isRequired
              placeholder={talukPlaceholder}
              value={talukPermenent}
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'talukPermenent',
                  value,
                  isNumericValue: false
                })
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={cityLabel}
              isRequired
              placeholder={cityPlaceholder}
              value={cityPermenent}
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'cityPermenent',
                  value,
                  isNumericValue: false
                })
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={countryLabel}
              placeholder={countryPlaceholder}
              value={countryPermenent}
              isRequired
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'countryPermenent',
                  value,
                  isNumericValue: false
                })
              }}
              height="50px"
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={postalLabel}
              placeholder={postalPlaceholder}
              value={postalPermenent}
              isRequired
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'postalPermenent',
                  value,
                  isNumericValue: true
                })
              }}
              height="50px"
            />
          </DropdownWrapper>
        </FlexWrapper>
      </InfoWrapper>
    </PageWrapper>
  )
}

export default PermanentDetails