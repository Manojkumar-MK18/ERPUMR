import {
    Column,
    FlexWrapper,
    PageWrapper,
    SectionTitle,
    ViewCardWrapper
} from 'components'
import strings from 'locale/en'
import { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { GetStaffList } from 'redux/Leave/typing'
import { RootState } from 'redux/store'

const StaffDetails = (): ReactElement => {
    const {
        staffDetails
    } = useSelector(
        (state: RootState) => ({
            staffDetails: state.leave.setStaffSelected as GetStaffList
        })
    )

    const {
        staffRegistration: {
            view,
            firstName,
            lastName,
            dob,
            blood,
            address,
            gender,
            role,
            martialStatus,
            mobileno,
            mail,
            qualification
        }
    } = strings

    return (
        <PageWrapper>
            <SectionTitle title={view} hasBackButton />
            <FlexWrapper justifyContent="space-around">
                <ViewCardWrapper>
                    <Column keyName={firstName} value={staffDetails?.firstName} />
                    <Column keyName={lastName} value={staffDetails?.lastName} />
                    <Column keyName={role} value={staffDetails?.technical_flag} />
                    <Column keyName={qualification} value={staffDetails?.qualification} />
                    <Column keyName={mail} value={staffDetails?.emailID} />
                    <Column keyName={gender} value={staffDetails?.gender} />
                </ViewCardWrapper>
                <ViewCardWrapper>
                    <Column keyName={dob} value={staffDetails?.dob} />
                    <Column keyName={blood} value={staffDetails?.blood_Group} />
                    <Column keyName={martialStatus} value={staffDetails?.marital_Status} />
                    <Column keyName={mobileno} value={staffDetails?.mobileNumber} />
                    <Column keyName={address} value={staffDetails?.address} />
                </ViewCardWrapper>
            </FlexWrapper>
        </PageWrapper>
    )
}

export default StaffDetails