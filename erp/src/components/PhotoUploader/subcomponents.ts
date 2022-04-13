import { colors } from 'const/theme'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const PhotoUploadWrapper = styled.div`
  position: relative;
  margin: 12px;
  width: 200px;
  height: 200px;
  border: 1px solid ${({ theme }) => theme.border};
  &:hover,
  &:focus {
    border: 1px solid ${colors.purple};
  }
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 415px) {
    margin: 12px auto;
  }
`

export const UploadIcon = styled(FontAwesomeIcon)`
  margin: 12px auto;
`

export const InputWrapper = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 200px;
  max-height: 200px;
  opacity: 0;
  cursor: pointer;
  z-index: 5;
`

export const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 200px;
  height: 200px;
  cursor: pointer;
  z-index: 5;
`
