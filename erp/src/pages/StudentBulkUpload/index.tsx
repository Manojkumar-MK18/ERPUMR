import {
    DropdownWrapper,
    EditableDropdown,
    FileUploader,
    FlexWrapper,
    PageWrapper,
    SectionTitle
} from 'components'
import AdminType from 'const/admin'
import {
    getBatchDropdown,
    getBranchDropdown,
    getInstituteDropdown
} from 'helpers'
import { ReactElement, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBatches, getBranches, getInstitutes } from 'redux/academic/api'
import { Branch } from 'redux/academic/typings'
import { RootState } from 'redux/store'
import { initialValues } from './const'

const BulkUpload = (): ReactElement => {
    const {
        acamedic: {
            instituteList,
            batchList,
            branchList
        }
    } = useSelector(
        (state: RootState) => ({
            acamedic: state.acamedic
        })
    )

    const dispatch = useDispatch()

    const instituteDropdown = instituteList ? getInstituteDropdown(instituteList) : []
    const branchDropdown = branchList ? getBranchDropdown(branchList) : []
    const batchDropdown = batchList ? getBatchDropdown(batchList) : []

    const [values, setValues] = useState(initialValues)

    useEffect(() => {
        dispatch(getInstitutes())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PageWrapper>
            <FlexWrapper noPadding>
                <SectionTitle title='Student Bulk Upload' />
            </FlexWrapper>
            <FlexWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        placeholder='Institute Name'
                        dropdownList={instituteDropdown}
                        title="Institute"
                        isRequired
                        handleSelect={(item) => {
                            setValues({
                                ...values,
                                institute: item?.name
                            })
                            dispatch(getBranches({
                                type: AdminType.INSTITUTEADMIN,
                                coachingCentreId: item?.id
                            }))
                        }}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        placeholder='Branch Name'
                        title="Branch"
                        isRequired
                        dropdownList={branchDropdown}
                        handleSelect={(item) => {
                            setValues({
                                ...values,
                                branch: item?.name
                            })
                            const selectedBranch: Array<Branch> = branchList.filter(
                                (obj: any) => obj?.id === item?.id
                            )
                            dispatch(getBatches({
                                type: AdminType.INSTITUTEADMIN,
                                branchId: item?.id,
                                coachingCentreId: selectedBranch[0]?.coachingCenterId
                            }))
                        }}
                    />
                </DropdownWrapper>
                <DropdownWrapper>
                    <EditableDropdown
                        title="Batch"
                        isRequired
                        placeholder='Batch Name'
                        dropdownList={batchDropdown}
                        handleSelect={(item) => {
                            setValues({
                                ...values,
                                batch: item?.name
                            })
                        }}
                    />
                </DropdownWrapper>
            </FlexWrapper>
            <FlexWrapper>
                <FileUploader
                    onUploadSuccess={() => { }}
                />
            </FlexWrapper>
        </PageWrapper>
    )
}

export default BulkUpload