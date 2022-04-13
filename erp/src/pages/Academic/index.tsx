import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  PageWrapper,
  SectionTitle,
  FlexWrapper,
  Input,
  TableWrapper,
  TableHeader,
  TableFooter,
  TableRow,
  Icon
} from 'components'
import { ReactElement, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { tableHeader } from './conts'
import strings from 'locale/en'
import { validateYear } from 'helpers/formValidation'
import { SearchButton } from 'pages/subcomponents'

const Academic = (): ReactElement => {
  const [year, setYear] = useState('')
  const [error, setError] = useState('')
  const {
    academic: { addAcademic, academicYear },
    button: { search }
  } = strings

  const handleValidate = () => {
    const error = validateYear(year)
    setError(error)
  }

  const handleSearch = () => {
    handleValidate()
  }

  return (
    <PageWrapper id="container">
      <SectionTitle title={addAcademic} />
      <FlexWrapper noPadding>
        <Input
          label={academicYear}
          isRequired
          placeholder={addAcademic}
          value={year}
          onBlur={handleValidate}
          error={error}
          width="30%"
          onChange={(value: string) => {
            setYear(value)
          }}
        />
        <SearchButton onClick={handleSearch}>{search}</SearchButton>
      </FlexWrapper>
      <div>
        <TableWrapper>
          <Table size="sm" responsive="sm">
            <TableHeader>
              <TableRow>
                {tableHeader?.map((header, index) => (
                  <th key={`header-${index}`}>{header}</th>
                ))}
              </TableRow>
            </TableHeader>
            <tbody>
              <TableRow>
                <td>{'2019'}</td>
                <td>
                  <Icon variant="outline-light" onClick={() => {}}>
                    <FontAwesomeIcon icon={['far', 'edit']} />
                  </Icon>
                </td>
              </TableRow>
            </tbody>
          </Table>
          <TableFooter
            currentPage={1}
            totalPages={2}
            handleNext={() => {}}
            handlePrevious={() => {}}
          />
        </TableWrapper>
      </div>
    </PageWrapper>
  )
}

export default Academic
