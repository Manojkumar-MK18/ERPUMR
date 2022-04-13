import styled from 'styled-components'

export const FileUploadWrapper = styled.div`
  width: 60%;
  height: 175px;
  border: 1px solid ${({ theme }) => theme.border};
  margin: 12px auto;
  text-align: center;
  padding: 12px 0;
  @media (max-width: 415px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  button {
    margin: 12px auto;
    min-width: 30%;
  }
`
