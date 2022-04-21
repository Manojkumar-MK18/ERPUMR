
import styled from "styled-components"

export const TableWrapper = styled.div`
  margin-top: 12px;
  padding: 10px; 
  --bs-gutter-x: 0;
  width: 100%;
  > * table {
    margin-bottom: 0; 
  }
`

export const TableHeader = styled.thead`
  background-color: ${({ theme }) => theme.table.background};
  color: ${({ theme }) => theme.table.color};
  height: 35px; 
`

export const TableRow = styled.tr`
vertical-align: baseline;  
`