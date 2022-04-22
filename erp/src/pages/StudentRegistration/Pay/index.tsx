import { Button, Column, DropdownWrapper, EditableDropdown, FlexWrapper, Input, PageWrapper, SectionTitle, ViewCardWrapper } from 'components'
import { ReactElement, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import getCourses from 'redux/academic/api'
import { getFeeMaster } from 'redux/fms/api'
import { AddFeeDescriptionResponse, Student } from 'redux/fms/typings'
import { RootState } from 'redux/store'
import { fessPaid, getFeeMasterByTermApi } from 'redux/studentRegistration/api'

const StudentPay = (): ReactElement => {
    const {
        acamedic: {
            feeTypeList,
            courseList,
            termList,
        },
        fms: { feeMasterList },
        selectedStudentDetails,
        addFee,
        selectStudentId
    } = useSelector(
        (state: RootState) => ({
            selectedStudentDetails: state.fms.selectedStudentDetails,
            acamedic: state.acamedic,
            fms: state.fms,
            addFee: state.studentRegistration.addFee,
            selectStudentId: state.studentRegistration.selectStudentId
        }),
        shallowEqual
    )
    const dispatch = useDispatch()
    const { courseId, firstName, lastName, regNo } = selectedStudentDetails as Student
    const [fees, setFees] = useState<Array<AddFeeDescriptionResponse>>([])
    const filteredList = fees.length > 0 ? fees : feeMasterList
    // eslint-disable-next-line no-unused-vars
    const [values, setValues] = useState(addFee)

    useEffect(() => {
        dispatch(getCourses())
        dispatch(getFeeMaster())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PageWrapper id="container">
            <SectionTitle title='Pay' hasBackButton />
            <FlexWrapper justifyContent='center'>
                <ViewCardWrapper>
                    <Column keyName='StudentName' value={`${firstName} ${lastName}`} />
                    <Column keyName='Course' value={courseId} />
                    <Column keyName='Admission Number' value={regNo} />
                </ViewCardWrapper>
            </FlexWrapper>
            <FlexWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={feeTypeList}
                        placeholder={'Select fee Type'}
                        title="Fee Type"
                        handleSelect={(item) => {
                            const filteredFeeMasterList = filteredList.filter(
                                (fee) => fee.feeTypeList === item.name
                            )
                            setFees(filteredFeeMasterList);
                            dispatch(getFeeMasterByTermApi(`${item?.name}`))
                        }}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={courseList}
                        placeholder={'Select Course List'}
                        title="Course List"
                        handleSelect={(item) => {
                            const filteredFeeMasterList = filteredList.filter(
                                (fee) => fee.courseId === item.id
                            )
                            setFees(filteredFeeMasterList)
                        }}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        dropdownList={termList}
                        placeholder={'Select Term List'}
                        title="Term List"
                        handleSelect={(item) => {
                            const filteredFeeMasterList = filteredList.filter(
                                (fee) => fee.termList === item.id
                            )
                            setFees(filteredFeeMasterList)
                            dispatch(getFeeMasterByTermApi(`${item?.id}`))

                        }}

                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <Input
                        value={values?.amount}
                        placeholder='Enter Amount'
                        label='Amount'
                        height='50px'
                        onChange={(value: string) => {
                            setValues({ ...values, amount: value })
                        }}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <Input
                        value={values?.description}
                        placeholder='Description'
                        label='Description'
                        height='50px'
                        onChange={(value: string) => {
                            setValues({ ...values, description: value })
                        }}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <Input
                        value={values?.paid}
                        placeholder='Paid'
                        label='Paid'
                        height='50px'
                        onChange={(value: string) => {
                            setValues({ ...values, paid: value })
                        }}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <Input
                        value={values?.referenceId}
                        placeholder='Reference Id'
                        label='Reference Id'
                        height='50px'
                        onChange={(value: string) => {
                            setValues({ ...values, referenceId: value })
                        }}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <Input
                        value={values?.modeOfPayment}
                        placeholder='Mode of Payment'
                        label='Mode Of Payment'
                        height='50px'
                        onChange={(value: string) => {
                            setValues({ ...values, modeOfPayment: value })
                        }}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <Input
                        value={values?.paidTypes}
                        placeholder="Paid Type"
                        label="Paid Type"
                        height='50px'
                        onChange={(value: string) => {
                            setValues({ ...values, paidTypes: value })
                        }}
                    />
                </DropdownWrapper>
            </FlexWrapper>
            <FlexWrapper justifyContent='center'>
                <Button
                    onClick={() => {
                        dispatch(fessPaid({ ...values, ...selectStudentId }))
                    }}
                >{'Pay'}</Button>
            </FlexWrapper>
        </PageWrapper>
    )
}

export default StudentPay