import { ReactElement, useState } from 'react'
import {
    Button,
    FlexWrapper,
    Input,
    PageWrapper,
    SectionTitle
} from 'components'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { AddNewdesignationName } from 'redux/Leave/api'

const Desgination = (): ReactElement => {

    const { designationDetails } = useSelector(
        (state: RootState) => ({
            designationDetails: state.leave.adddesignation
        }),
        shallowEqual
    )

    const dispatch = useDispatch()
    const [values, setValues] = useState(designationDetails)

    const canSave =
        !!values?.designationName

    return (
        <PageWrapper>
            <SectionTitle title='Designation' />
            <FlexWrapper>
                <Input
                    value={values?.designationName}
                    placeholder='Enter Designation'
                    width="30%"
                    height="7px"
                    onChange={(value: string) => {
                        setValues({ ...values, designationName: value })
                    }}
                />
                <Button
                    disabled={!canSave}
                    onClick={() => {
                        dispatch(AddNewdesignationName(values)) 
                    }}
                >Submit</Button>
            </FlexWrapper>
        </PageWrapper>
    )
}

export default Desgination