/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, useEffect, useState } from 'react'
import {
    DropdownWrapper,
    EditableDropdown,
    FlexWrapper,
    Input,
    PageWrapper,
    SectionTitle
} from 'components'
import strings from 'locale/en'
import { SearchButton } from 'pages/subcomponents'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { AddLeaveapi } from 'redux/Leave/api'
import { DropdownListProps } from 'components/EditableDropdown/typings'
import { updateSelectedUser } from 'redux/Leave/action'

const AddLeave = (): ReactElement => {
    const {
        encassable,
        leaveDetails,
        selectedUser,
        userid = "",
        role = ""
    } = useSelector(
        (state: RootState) => ({
            encassable: state.leave.encassable,
            leaveDetails: state.leave.addLeaveDetails,
            userid: state.user.userInfo?.userDetail.usersId,
            role: state.user.userInfo?.role,
            selectedUser: state.leave.selectedUser
        }),
        shallowEqual
    )

    const {
         hrms: {
            leaveMaster: {
                description,
                leaveDescription,
                leaveName,
                encassual,
                encassualDetails
            }
        }
    } = strings

    // eslint-disable-next-line no-unused-vars
    const [values, setValues] = useState(leaveDetails)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(updateSelectedUser({
            adminType: role,
            userId: userid
        }))
    }, [])

    return (
        <PageWrapper>
            <SectionTitle title={'Add Leave'} hasBackButton />
            <FlexWrapper noPadding >
                <DropdownWrapper>
                    <Input
                        value={values?.leaveName}
                        width="100%"
                        isRequired
                        label={leaveName}
                        height="50px"
                        placeholder={leaveName}
                        onChange={(value: string) => {
                            setValues({ ...values, leaveName: value })
                        }}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <Input
                        value={values?.leaveDescription}
                        width="100%"
                        isRequired
                        label={leaveDescription}
                        height="50px"
                        placeholder={description}
                        onChange={(value: string) => {
                            setValues({ ...values, leaveDescription: value })
                        }}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={encassable}
                        isRequired
                        placeholder={encassual}
                        handleSelect={(value: DropdownListProps) => {
                            setValues({ ...values, encashable: value?.name })
                        }}
                        title={encassualDetails}
                    />
                </DropdownWrapper>
                <SearchButton
                    onClick={() => {
                        dispatch(AddLeaveapi({ ...values, ...selectedUser }))
                    }}
                >
                    Submit
                </SearchButton>
            </FlexWrapper>
        </PageWrapper>
    )
}

export default AddLeave