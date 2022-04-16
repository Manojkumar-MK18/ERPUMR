import { ReactElement } from 'react'
import {
  PageWrapper,
  PhotoUploader,
  EditableDropdown,
  DropdownWrapper,
  Input,
  CardWrapper,
  CardHeader,
  FlexWrapper,
  SectionTitle,
  Button
} from 'components'
import { InfoWrapper } from './subcomponents'

const AddStaffRegistration = (): ReactElement => {
  return (
    <div>
      <CardWrapper>
        <PageWrapper>
          <FlexWrapper noPadding>
            <SectionTitle title='Staff Registration' />
          </FlexWrapper>
          <FlexWrapper width="100%" justifyContent="center" noPadding>
            <DropdownWrapper>
              <EditableDropdown
                dropdownList={[
                  { id: '01', name: 'Teacher' },
                  { id: '02', name: 'Non-Teacher' }
                ]}
                title={'Select Role'}
                placeholder={'Role'}
                onBlur={() => { }}
                error={''}
                handleSelect={() => { }} />
            </DropdownWrapper>
          </FlexWrapper>
          <InfoWrapper>
            <PhotoUploader />
            <FlexWrapper width="100%">
              <DropdownWrapper>
                <Input
                  label={'First Name'}
                  isRequired
                  placeholder={'Enter First Name'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'Middle Name'}
                  isRequired
                  placeholder={'Enter Middle Name'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'Last Name'}
                  isRequired
                  placeholder={'Enter Last Name'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <EditableDropdown
                  dropdownList={[
                    { id: 'male', name: 'Male' },
                    { id: 'female', name: 'Female' }
                  ]}
                  title={'Gender'}
                  placeholder={'Select Gender'}
                  onBlur={() => { }}
                  error={''}
                  handleSelect={() => { }} />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'Present Address'}
                  isRequired
                  placeholder={'Enter Present Address'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'Permanent Address'}
                  isRequired
                  placeholder={'Enter Address'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'Date of Birth'}
                  isRequired
                  placeholder={'Enter DoB'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <EditableDropdown
                  dropdownList={[
                    { id: '01', name: 'Married' },
                    { id: '02', name: 'UnMarried' }
                  ]}
                  title={'Marital status'}
                  placeholder={'Select Marital status'}
                  onBlur={() => { }}
                  error={''}
                  handleSelect={() => { }} />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'Mobile No'}
                  placeholder={'Enter Mobile No'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'Email'}
                  placeholder={'Enter Email'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'Qualification'}
                  placeholder={'Qualification'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <EditableDropdown
                   dropdownList={[
                    { id: '01', name: 'Indian' },
                    { id: '02', name: 'NRI' }
                  ]}
                  title={'Nationality'}
                  placeholder={'Select Nationality'}
                  onBlur={() => { }}
                  error={''}
                  handleSelect={() => { }} />
              </DropdownWrapper>

              <DropdownWrapper>
                <EditableDropdown
                  dropdownList={[
                    { id: '01', name: 'A+' },
                    { id: '02', name: 'O+' },
                    { id: '03', name: 'B+' },
                    { id: '04', name: 'AB+' },
                    { id: '05', name: 'A-' }, 
                    { id: '06', name: 'B-' },
                    { id: '07', name: 'O-' },
                    { id: '08', name: 'AB-' },
                  ]}
                  title={'Blood Group'}
                  placeholder={'Select Blood Group'}
                  onBlur={() => { }}
                  error={''}
                  handleSelect={() => { }} />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'Height'}
                  placeholder={'Height'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'Weight'}
                  placeholder={'Weight'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <EditableDropdown
                  dropdownList={[]}
                  title={'Finance Group'}
                  isRequired
                  placeholder={'Select..'}
                  onBlur={() => { }}
                  error={''}
                  handleSelect={() => { }} />
              </DropdownWrapper>
            </FlexWrapper>
          </InfoWrapper>
        </PageWrapper>
      </CardWrapper>
      <CardWrapper>
        <CardHeader>Other Details</CardHeader>
        <PageWrapper>
          <InfoWrapper>
            <FlexWrapper width="100%" noPadding>
              <DropdownWrapper>
                <EditableDropdown
                  dropdownList={[]}
                  title={'Department'}
                  placeholder={'Select Department'}
                  onBlur={() => { }}
                  error={''}
                  handleSelect={() => { }} />
              </DropdownWrapper>
              <DropdownWrapper>
                <EditableDropdown
                  dropdownList={[]}
                  title={'Designation'}
                  placeholder={'Select Designation'}
                  onBlur={() => { }}
                  error={''}
                  handleSelect={() => { }} />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'Total Experience'}
                  isRequired
                  placeholder={'Eg. 4 year 4 months'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'Vehical No'}
                  isRequired
                  placeholder={'Enter Vehical No'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'Bank Account'}
                  placeholder={'Enter Bank Account'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'Email'}
                  placeholder={'Enter Email'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'Start Date'}
                  placeholder={'Start Date'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'QID'}
                  placeholder={'Enter QID'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>

              <DropdownWrapper>
                <Input
                  label={'Expiry Date of QID'}
                  placeholder={'Enter QID'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'Passport No'}
                  placeholder={'Enter Passport No'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'Sponsored By'}
                  placeholder={'Sponsored By'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'Contract Date'}
                  placeholder={'Contract Date'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'Labour Card Date'}
                  placeholder={'Labour Card Date'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <EditableDropdown
                  dropdownList={[]}
                  title={'Medicals'}
                  placeholder={'Medicals'}
                  onBlur={() => { }}
                  error={''}
                  handleSelect={() => { }} />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'Device Id'}
                  placeholder={'Device Id'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
              <DropdownWrapper>
                <Input
                  label={'Device User Id'}
                  placeholder={'Device User Id'}
                  value={''}
                  onBlur={() => { }}
                  error={''}
                  width="100%"
                  onChange={() => { }}
                  height="50px" />
              </DropdownWrapper>
            </FlexWrapper>
          </InfoWrapper>
          <FlexWrapper justifyContent='center'>
            <Button>Submit</Button>
          </FlexWrapper>
        </PageWrapper>
      </CardWrapper></div>
  )
}

export default AddStaffRegistration
