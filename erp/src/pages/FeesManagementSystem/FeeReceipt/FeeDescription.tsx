import { ReactElement } from 'react'
import { TableWrapper, TableHeader, TableRow, Input } from 'components'
import Table from 'react-bootstrap/Table'
import { feeDescriptionTableHeader, feeDetails } from './const'
import strings from 'locale/en'
import { Remarks } from './subcomponents'

const FeeDescription = (): ReactElement => {
  const {
    fms: {
      feeReceipt: { remarks, enterRemarks }
    }
  } = strings
  return (
    <div>
      <TableWrapper>
        <Table size="sm" responsive="sm">
          <TableHeader>
            <TableRow>
              {feeDescriptionTableHeader?.map((header, index) => (
                <th key={`header-${index}`}>{header}</th>
              ))}
            </TableRow>
          </TableHeader>
          <tbody>
            {feeDetails.map((details, index) => {
              return (
                <TableRow key={`fee-details-${index}`}>
                  <td>{details?.type}</td>
                  <td>{details?.con}</td>
                  <td>{details?.conPercentage}</td>
                  <td>{details?.paid}</td>
                </TableRow>
              )
            })}
          </tbody>
        </Table>
        <Remarks>
          <Input
            label={remarks}
            placeholder={enterRemarks}
            value={''}
            onBlur={() => {}}
            error={''}
            onChange={(value: string) => {
              console.log(value)
            }}
            height="120px"
            isRequired
            inputType="textarea"
          />
        </Remarks>
      </TableWrapper>
    </div>
  )
}

export default FeeDescription
