import { Button, EditableDropdown, FlexWrapper, PageWrapper, SectionTitle } from "components"
import { ReactElement } from "react"

const AddPrivileges = (): ReactElement => {
    return (
        <PageWrapper>
            <SectionTitle title="Add Privileges" />
            <FlexWrapper>
                <EditableDropdown
                    dropdownList={[]}
                    title="Admin"
                    width="30%"
                    placeholder={"Select Admin"}
                    handleSelect={() => { }}
                />
                <Button style={{ marginBottom: "0px" }}>Submit</Button>
            </FlexWrapper>
        </PageWrapper>
    )
}

export default AddPrivileges