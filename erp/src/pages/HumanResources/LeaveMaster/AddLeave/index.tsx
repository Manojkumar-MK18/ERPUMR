import { ReactElement } from 'react'
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
import { shallowEqual, useSelector } from 'react-redux'
import { RootState } from 'redux/store'

const AddLeave = (): ReactElement => {
    const {
        encassable
    } = useSelector(
        (state: RootState) => ({
            encassable: state.leave.encassable
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

    return (
        <PageWrapper>
            <SectionTitle title={'Add Leave'} hasBackButton />
            <FlexWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={encassable}
                        isRequired
                        placeholder={encassual}
                        handleSelect={() => { }}
                        title={encassualDetails}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <Input
                        value={''}
                        width="100%"
                        isRequired
                        label={leaveName}
                        height="50px"
                        placeholder={leaveName}

                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <Input
                        value={''}
                        width="100%"
                        isRequired
                        label={leaveDescription}
                        height="50px"
                        placeholder={description}

                    />
                </DropdownWrapper>
                <SearchButton>Submit</SearchButton>
            </FlexWrapper>
        </PageWrapper>
    )
}

export default AddLeave