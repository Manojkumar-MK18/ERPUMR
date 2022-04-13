import { ReactElement } from 'react'
import Button from 'components/Button'
import { Body, Span } from 'typography'
import { FileUploadWrapper } from './subcomponents'
import strings from 'locale/en'

interface FileUploaderProps {
  type?: 'doc' | 'image'
}

const FileUploader = ({ type }: FileUploaderProps): ReactElement => {
  const {
    fileUpload: { dragAndDropText, upload, docFilesOnly, imageOnly }
  } = strings
  return (
    <FileUploadWrapper>
      <Body>{dragAndDropText}</Body>
      <Span> OR</Span>
      <Button>{upload}</Button>
      <Body>{type === 'image' ? imageOnly : docFilesOnly}</Body>
    </FileUploadWrapper>
  )
}

export default FileUploader
