
import { ReactElement, useEffect } from 'react'
import { PageWrapper, EditableDropdown, DropdownWrapper } from 'components'
import { InfoWrapper, FlexWrapper } from '../subcomponents'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import { updateChildInformation } from 'redux/studentRegistration/actions'
import strings from 'locale/en'
import {
  getCourses,
  getInstitutes,
  getBranchesByInstitute,
  getAllCoursesByInstitute,
  getBatchesForCourse
} from 'redux/academic/actions'
import {
  getBranchDropdown,
  getInstituteDropdown,
  getBatchDropdown
} from 'helpers'
import { ChildInformation } from 'redux/studentRegistration/typings'
import { AdminType } from 'const'


const CourseInformation = (): ReactElement => {
  const {
    academic: {
      academicYear: academicYearList,
      admissionTypeList,
      primaryLanguageList,
      secondaryLanguageList,
      courseList,
      instituteList,
      branchList,
      batchList
    },
    childInformation,
    role = "",
    coachingCenterId = ""
  } = useSelector(
    (state: RootState) => ({
      academic: state.acamedic,
      childInformation: state.studentRegistration.childInformation as ChildInformation,
      role: state.user.userInfo?.role,
      coachingCenterId: state.user.userInfo?.userDetail.coachingCenterId
    }),
    shallowEqual
  )

  const {
    studentRegistration: {
      childInformation: { selectYear, academicYear, selectCourse, course },
      courseInformation: {
        admisionTypeLabel,
        admissionTypePlaceholder,
        primaryLanguage,
        secondaryLanguage,
        languagePlaceholder,
        instituteName,
        selectInstituteName,
        branchName,
        selectBranch,
        batch,
        selectBatch
      }
    }
  } = strings


  const dispatch = useDispatch()
  const institutes = instituteList ? getInstituteDropdown(instituteList) : []
  const branches = branchList ? getBranchDropdown(branchList) : []
  const batches = batchList ? getBatchDropdown(batchList) : []

  useEffect(() => {
    if (role !== AdminType.SUPERADMIN) {
      dispatch(updateChildInformation({ instituteId: coachingCenterId }))
      dispatch(getAllCoursesByInstitute(coachingCenterId))
    } else {
      dispatch(getCourses())
      dispatch(getInstitutes())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role])

  return (
    <PageWrapper>
      <InfoWrapper>
        <FlexWrapper width="100%">
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={academicYearList}
              title={academicYear}
              placeholder={selectYear}
              onBlur={() => { }}
              isRequired
              error={''}
              handleSelect={(item) =>
                dispatch(updateChildInformation({ academicYear: item.name }))
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={admissionTypeList}
              title={admisionTypeLabel}
              placeholder={admissionTypePlaceholder}
              onBlur={() => { }}
              error={''}
              handleSelect={(item) =>
                dispatch(updateChildInformation({ admissionType: item.name }))
              }
            />
          </DropdownWrapper>
          {role === AdminType.SUPERADMIN && (
            <DropdownWrapper>
              <EditableDropdown
                dropdownList={institutes}
                title={instituteName}
                placeholder={selectInstituteName}
                isRequired
                handleSelect={(item) => {
                  dispatch(updateChildInformation({ instituteId: item.id }));
                  dispatch(getAllCoursesByInstitute(item.id));

                }}
              />
            </DropdownWrapper>
          )}
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={courseList}
              title={course}
              placeholder={selectCourse}
              onBlur={() => { }}
              error={''}
              handleSelect={(item) => {
                dispatch(updateChildInformation({ courseId: item.id }))
                dispatch(
                  getBranchesByInstitute({
                    coachingCentreId: childInformation?.instituteId,
                    courseId: item?.id
                  })
                )
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={branches}
              title={branchName}
              placeholder={selectBranch}
              isRequired
              handleSelect={(item) => {
                dispatch(updateChildInformation({ branchId: item.id }))
                dispatch(
                  getBatchesForCourse({
                    courseId: childInformation?.courseId,
                    coachingCentreId: childInformation?.instituteId,
                    branchId: item.id
                  })
                )
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={batches}
              title={batch}
              placeholder={selectBatch}
              isRequired
              handleSelect={(item) => {
                dispatch(updateChildInformation({ batchId: item.id }))
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={primaryLanguageList}
              title={primaryLanguage}
              placeholder={languagePlaceholder}
              onBlur={() => { }}
              error={''}
              handleSelect={(item) =>
                dispatch(updateChildInformation({ primaryLanguage: item.name }))
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={secondaryLanguageList}
              title={secondaryLanguage}
              placeholder={languagePlaceholder}
              onBlur={() => { }}
              error={''}
              handleSelect={(item) =>
                dispatch(
                  updateChildInformation({ secondaryLanguage: item.name })
                )
              }
            />
          </DropdownWrapper>
        </FlexWrapper>
      </InfoWrapper>
    </PageWrapper>
  )
}

export default CourseInformation
