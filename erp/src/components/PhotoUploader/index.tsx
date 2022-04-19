import { ChangeEvent, ReactElement, useState } from 'react'
import { colors } from 'const/theme'
import strings from 'locale/en'
import { Small } from 'typography'
import {
  PhotoUploadWrapper,
  UploadIcon,
  InputWrapper,
  Image
} from './subcomponents'
import PhotoUploaderProps from './typings'

const PhotoUploader = ({ handleUpload }: PhotoUploaderProps): ReactElement => {
  const [image, setImage] = useState<any>()

  const {
    studentRegistration: { uploadImage }
  } = strings

  return (
    <PhotoUploadWrapper>
      <UploadIcon icon={['fas', 'cloud-upload-alt']} size="2x" />
      <InputWrapper
        type="file"
        id="img-upload"
        name="file"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const target = event?.target
          const selectedFile = target.files?.length ? target.files[0] : ''
          const reader = new FileReader()
          reader.onload = function (event) {
            setImage(event?.target?.result)
            if (handleUpload) {
              handleUpload(event?.target?.result)
            }
          }
          if (selectedFile) {
            reader.readAsDataURL(selectedFile)
          }
        }}
      />
      <Small color={colors.gray}>{uploadImage}</Small>
      {image && <Image src={image} alt="profile image" />}
    </PhotoUploadWrapper>
  )
}

export default PhotoUploader
