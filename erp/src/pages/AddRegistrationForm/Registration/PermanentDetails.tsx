import { ReactElement, useState } from 'react'
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
import { validateEmail, validatePhone } from 'helpers/formValidation'

const PermanentDetails = (): ReactElement => {
  const {
    permanentDetails: {
      address,
      email,
      mobileNumber,
      parentMobileNumber,
      district,
      city,
      taluk,
      country,
      postal,
      isSameAsCommunicationAddress
    },
    stateList
  } = useSelector(
    (state: RootState) => ({
      permanentDetails: state.studentRegistration.permanentDetails,
      stateList: state.acamedic.stateList
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const [emailError, setEmailError] = useState('')
  const [mobileError, setMobileError] = useState('')
  const [parentMobileError, setParentMobileError] = useState('')

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
              value={address}
              isRequired
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'address',
                  value,
                  isNumericValue: false
                })
              }}
              height="50px"
              isDisabled={isSameAsCommunicationAddress}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={emailLabel}
              isRequired
              placeholder={emailPlaceholder}
              value={email}
              onBlur={() => {
                const error = validateEmail(email)
                setEmailError(error)
              }}
              error={emailError}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'email',
                  value,
                  isNumericValue: false
                })
              }}
              height="50px"
              isDisabled={isSameAsCommunicationAddress}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={mobileNumberLabel}
              placeholder={mobileNumberPlaceholder}
              value={mobileNumber}
              isRequired
              onBlur={() => {
                const error = validatePhone(mobileNumber)
                setMobileError(error)
              }}
              error={mobileError}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'mobileNumber',
                  value,
                  isNumericValue: true
                })
              }}
              height="50px"
              isDisabled={isSameAsCommunicationAddress}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={parentMobileNumberLabel}
              placeholder={parentMobileNumberPlaceholder}
              value={parentMobileNumber}
              onBlur={() => {
                const error = validatePhone(parentMobileNumber)
                setParentMobileError(error)
              }}
              error={parentMobileError}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'parentMobileNumber',
                  value,
                  isNumericValue: true
                })
              }}
              height="50px"
              isDisabled={isSameAsCommunicationAddress}
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
                  key: 'state',
                  value: item.name,
                  isNumericValue: false
                })
              }
              isDisabled={isSameAsCommunicationAddress}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={districtLabel}
              isRequired
              placeholder={districtPlaceholder}
              value={district}
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'district',
                  value,
                  isNumericValue: false
                })
              }}
              height="50px"
              isDisabled={isSameAsCommunicationAddress}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={talukLabel}
              isRequired
              placeholder={talukPlaceholder}
              value={taluk}
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'taluk',
                  value,
                  isNumericValue: false
                })
              }}
              height="50px"
              isDisabled={isSameAsCommunicationAddress}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={cityLabel}
              isRequired
              placeholder={cityPlaceholder}
              value={city}
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'city',
                  value,
                  isNumericValue: false
                })
              }}
              height="50px"
              isDisabled={isSameAsCommunicationAddress}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={countryLabel}
              placeholder={countryPlaceholder}
              value={country}
              isRequired
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'country',
                  value,
                  isNumericValue: false
                })
              }}
              height="50px"
              isDisabled={isSameAsCommunicationAddress}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              label={postalLabel}
              placeholder={postalPlaceholder}
              value={postal}
              isRequired
              onBlur={() => {}}
              error={''}
              width="100%"
              onChange={(value) => {
                handleChange({
                  key: 'postal',
                  value,
                  isNumericValue: true
                })
              }}
              height="50px"
              isDisabled={isSameAsCommunicationAddress}
            />
          </DropdownWrapper>
        </FlexWrapper>
      </InfoWrapper>
    </PageWrapper>
  )
}

export default PermanentDetails
