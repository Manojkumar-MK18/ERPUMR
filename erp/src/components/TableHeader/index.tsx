import styled from 'styled-components'

export const TableWrapper = styled.div`
  margin-top: 12px;
  border: 1px solid ${({ theme }) => theme.table.border};
  --bs-gutter-x: 0;
  width: 100%;
  > * table {
    margin-bottom: 0;
  }
`

const TableHeader = styled.thead`
  background-color: ${({ theme }) => theme.table.background};
  color: ${({ theme }) => theme.table.color};
  height: 35px;
`

export default TableHeader
