/* eslint-disable no-unused-vars */
import { ReactElement, useEffect } from 'react'
import {
  SectionTitle,
  PageWrapper,
  FlexWrapper,
  DropdownWrapper,
  EditableDropdown,
  Input,
  Button,
  TableWrapper,
  TableHeader,
  TableRow
} from 'components'
import strings from 'locale/en'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import getCourses, { getChildCourses } from 'redux/academic/api'
import { Table } from 'react-bootstrap'

const StudentConsession = (): ReactElement => {
  const {
    acamedic: {
      courseList,
    }
  } = useSelector(
    (state: RootState) =>
    ({
      acamedic: state.acamedic
    }),
    shallowEqual
  )

  const {
    stuentConsession: {
      title,
      admissionId,
      placeholderadmission,
      course,
      batch,
      branch,
      mobile,
      placeholder: {
        coursePlaceholder,
        batchPlaceholder,
        branchPlaceholder,
        mobileplaceholder
      }
    },
    button: {
      search,
    }
  } = strings

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCourses())
  })

  return (
    <PageWrapper id="container">
      <SectionTitle title={title} />
      <FlexWrapper hasBorder >
        <DropdownWrapper>
          <Input
            value=''
            label={admissionId}
            placeholder={placeholderadmission}
          />
        </DropdownWrapper>
        <Button style={{ marginTop: '25px' }}>{search}</Button>
      </FlexWrapper>
      <FlexWrapper>
        <DropdownWrapper>
          <EditableDropdown
            title={course}
            dropdownList={courseList}
            placeholder={coursePlaceholder}
            handleSelect={(item) => { }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={[]}
            title={branch}
            placeholder={branchPlaceholder}
            handleSelect={() => { }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <EditableDropdown
            dropdownList={[]}
            title={batch}
            placeholder={batchPlaceholder}
            handleSelect={() => { }}
          />
        </DropdownWrapper>
        <DropdownWrapper>
          <Input
            value=""
            label={mobile}
            height="50px"
            placeholder={mobileplaceholder}
          />
        </DropdownWrapper>
      </FlexWrapper>
      <FlexWrapper justifyContent='center' noPadding>
        <Button>{'Submit'}</Button>
      </FlexWrapper>
      <>
        {/* <TableWrapper>
          <Table size='sm' responsive="sm">
            <TableHeader>
              <TableRow>

              </TableRow>
            </TableHeader>
            <tbody>
              <TableRow>
 
              </TableRow>
            </tbody>
          </Table>
        </TableWrapper> */}
      </>
    </PageWrapper>
  )
}

export default StudentConsession
