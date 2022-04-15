import { ReactElement, useEffect } from 'react'
import { PageWrapper, EditableDropdown, DropdownWrapper } from 'components'
import { InfoWrapper, FlexWrapper } from '../subcomponents'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import { updateCourseInformation } from 'redux/studentRegistration/actions'
import strings from 'locale/en'
import getCourses from 'redux/academic/api'
import getCoursesDropdown from '../../../redux/academic/helpers'

const CourseInformation = (): ReactElement => {
  const {
    academic: {
      academicYear: academicYearList,
      admissionTypeList: admissionDropLists, 
      primaryLanguageList: primaryDropdown,
      secondaryLanguageList: secondaryDropdown
    },
    courses
  } = useSelector(
    (state: RootState) => ({
      academic: state.acamedic,
      childInformation: state.studentRegistration.studentRegistration,
      courses: state.acamedic.courses
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const {
    studentRegistration: {
      semesterOrClass,
      childInformation: { selectYear, academicYear },
      courseInformation: {
        admisionTypeLabel,
        admissionTypePlaceholder,
        primaryLanguage,
        secondaryLanguage,
        languagePlaceholder
      }
    }
  } = strings

  const CourseDrop = courses ? getCoursesDropdown(courses) : []

  useEffect(() => {
    dispatch(getCourses())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


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
              error={''}
              handleSelect={(item) =>
                dispatch(updateCourseInformation({ academicYear: item.name }))
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={admissionDropLists}
              title={admisionTypeLabel}
              placeholder={admissionTypePlaceholder}
              onBlur={() => { }}
              error={''}
              handleSelect={(item) =>
                dispatch(updateCourseInformation({ admissionTypeList: item.name }))
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={CourseDrop}
              title={semesterOrClass}
              placeholder={semesterOrClass}
              onBlur={() => { }}
              error={''}
              handleSelect={(item) =>
                dispatch(updateCourseInformation({ semester: item.name }))
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={primaryDropdown}
              title={primaryLanguage}
              placeholder={languagePlaceholder}
              onBlur={() => { }}
              error={''}
              handleSelect={(item) =>
                dispatch(updateCourseInformation({ primaryLanguage: item.name }))
              }
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={secondaryDropdown}
              title={secondaryLanguage}
              placeholder={languagePlaceholder}
              onBlur={() => { }}
              error={''}
              handleSelect={(item) =>
                dispatch(updateCourseInformation({ secondaryLanguage: item.name }))
              }
            />
          </DropdownWrapper>
        </FlexWrapper>
      </InfoWrapper>
    </PageWrapper>
  )
}

export default CourseInformation
