/* eslint-disable no-unused-vars */
import { Button, Column, DropdownWrapper, EditableDropdown, FlexWrapper, Input, PageWrapper, SectionTitle, ViewCardWrapper } from 'components'
import { ReactElement, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import getCourses from 'redux/academic/api'
import { getFeeMaster } from 'redux/fms/api'
import { AddFeeDescriptionResponse, Student } from 'redux/fms/typings'
import { RootState } from 'redux/store'

const StudentPay = (): ReactElement => {
    const {
        acamedic: {
            feeTypeList,
            courseList,
            termList,
        },
        fms: { feeMasterList },
        selectedStudentDetails
    } = useSelector(
        (state: RootState) => ({
            selectedStudentDetails: state.fms.selectedStudentDetails,
            acamedic: state.acamedic,
            fms: state.fms
        }),
        shallowEqual
    )
    const dispatch = useDispatch()
    const { courseId, firstName, lastName, regNo } = selectedStudentDetails as Student
    const [fees, setFees] = useState<Array<AddFeeDescriptionResponse>>([])
    const filteredList = fees.length > 0 ? fees : feeMasterList

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
                            setFees(filteredFeeMasterList)
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
                            console.log(filteredFeeMasterList);

                        }}

                    />

                </DropdownWrapper>
                <DropdownWrapper>
                    <Input
                        value=''
                        placeholder='Enter Amount'
                        label='Amount'
                        height='50px'
                    />
                </DropdownWrapper>
            </FlexWrapper>
            <div>Amount: {filteredList.map((feeMaster, index) => {
                return (
                    <div key={`fee-master-${index}`}>{feeMaster?.amount}</div>
                )
            })}</div>
            <FlexWrapper justifyContent='center'>
                <Button>{'Pay'}</Button>
            </FlexWrapper>
        </PageWrapper>
    )
}

export default StudentPay