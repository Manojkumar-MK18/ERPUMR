import styled from 'styled-components'

export const TableWrapper = styled.div`
  margin-top: 12px;
  border: 1px solid #009EFA;
  --bs-gutter-x: 0;
  width: 100%;
  > * table {
    margin-bottom: 0;
  }
  #privilage {
    margin-top: 12px;
    padding: 10px;
    --bs-gutter-x: 0;
    width: 100%;
    > * table {
      margin-bottom: 0;
    }
  }
`

export const TableRow = styled.tr`
vertical-align: baseline;  
`

const TableHeader = styled.thead`
  background-color: #009EFA;
  color: ${({ theme }) => theme.table.color};
  height: 35px;
`

export default TableHeader
