/* eslint-disable no-unused-vars */
import {
    DropdownWrapper,
    EditableDropdown,
    FlexWrapper,
    Input,
    PageWrapper,
    SectionTitle
} from 'components'
import strings from 'locale/en'
import getFeeDescriptionDropdown from 'pages/FeesManagementSystem/AddFeeMaster/helpers'
import { ReactElement, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getFeeDescriptions, getFeeMaster } from 'redux/fms/api'
import { RootState } from 'redux/store'
import { Body } from 'typography'
import { initialPaymentValues, resetPaymentValues } from '../const'

const Payment = (): ReactElement => {
    const {
        acamedic: { feeTypeList },
        fms: { feeMasterList, selectedStudentDetails }
    } = useSelector((state: RootState) => ({
        fms: state.fms,
        acamedic: state.acamedic
    }),
        shallowEqual
    )

    const {
        fms: {
            feeDescription: {
                feeType,
                selectFeeType,
                selectFeeDescription,
                feeDescription
            }
        },
        studentRegistration: {
            childInformation: { course }
        }
    } = strings

    const dispatch = useDispatch()

    const [values, setValues] = useState(initialPaymentValues)
    const [resetValues, setResetValues] = useState(resetPaymentValues)

    const filteredDescription = values?.feeType
        ? feeMasterList.filter(
            (des) => des?.title === values?.feeType
        ) : []

    const coursesToFilter =
        values.feeType && values.description
            ? feeMasterList.filter(
                (description) =>
                    description.title === values.feeType &&
                    description.description === values.description
            )
            : []

    const sum = coursesToFilter.reduce((sum, current) => Number(sum) + Number(current.amount), 0)

    useEffect(() => {
        dispatch(getFeeMaster())
        dispatch(getFeeDescriptions())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PageWrapper>
            <FlexWrapper noPadding >
                <SectionTitle title='Pay' />
            </FlexWrapper>
            <div>
                {values?.description && (
                    <>Total:<span style={{ color: 'red' }}> {sum}</span></>
                )}
            </div>
            <FlexWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        title={feeType}
                        placeholder={selectFeeType}
                        dropdownList={feeTypeList}
                        handleSelect={(item) => {
                            setValues({
                                ...values,
                                feeType: item.name,
                                description: '',
                                courseId: '',
                                term: '',
                                amount: '',
                                paymentMode: '',
                                referenceId: ''
                            })
                            setResetValues({
                                ...resetPaymentValues,
                                description: true,
                                courseId: true,
                                term: true,
                                amount: true,
                                paymentMode: true,
                                referenceId: true,
                                bankName: true
                            })
                        }}
                        reset={resetValues?.feeType}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        title={feeDescription}
                        placeholder={selectFeeDescription}
                        dropdownList={getFeeDescriptionDropdown(filteredDescription)}
                        handleSelect={(item) => {
                            setValues({
                                ...values,
                                description: item.name,
                                courseId: '',
                                term: '',
                                amount: '',
                                paymentMode: '',
                                referenceId: ''
                            })
                            setResetValues({
                                ...resetPaymentValues,
                                courseId: true,
                                term: true,
                                amount: true,
                                paymentMode: true,
                                referenceId: true,
                                bankName: true
                            })
                        }}
                        reset={resetValues?.description}
                    />
                </DropdownWrapper>
                <DropdownWrapper >
                    <Input
                        value={selectedStudentDetails?.coachingCentre}
                        isDisabled
                        height='50px'
                        label={course}
                    />
                </DropdownWrapper>
            </FlexWrapper>
        </PageWrapper>
    )
}

export default Payment