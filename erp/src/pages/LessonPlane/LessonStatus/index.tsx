import { ReactElement } from "react"
import {
    DropdownWrapper,
    EditableDropdown,
    FlexWrapper,
    PageWrapper,
    SectionTitle
} from "components"

const LessonStatus = (): ReactElement => {
    return (
        <PageWrapper>
            <SectionTitle title="Lesson Status" />
            <FlexWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={[]}
                        placeholder='Select Faculty'
                        title="Faculty"
                        handleSelect={() => { }}
                    />
                </DropdownWrapper>
            </FlexWrapper>
        </PageWrapper>
    )
}

export default LessonStatus