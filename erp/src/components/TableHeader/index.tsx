import { Card } from 'react-bootstrap'
import styled from 'styled-components'

export const ViewCardWrapper = styled(Card)`
  width: 45%;
  padding: 1px 3px 6px 10px;
  @media (max-width: 415px) {
    width: 100%;
    margin-bottom: 16px;
  }
`

export const TableWrapper = styled.div`
  margin-top: 12px;
  border: 1px solid ${({ theme }) => theme.table.border};
  --bs-gutter-x: 0;
  width: 100%;
  > * table {
    margin-bottom: 0; 
  }
  #privilage{
    margin-top: 12px;
  padding: 10px; 
  --bs-gutter-x: 0;
  width: 100%;
  > * table {
    margin-bottom: 0; 
  }
  }
`

const TableHeader = styled.thead`
  background-color: ${({ theme }) => theme.table.background};
  color: ${({ theme }) => theme.table.color};
  height: 35px; 
`

export default TableHeader
