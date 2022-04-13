import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface NotesProps {
  width: string
  height: string
  title: string
  subTitle: string
  variant: 'danger' | 'info' | 'primary' | 'warning'
  icon: IconProp
}

export interface NotesWrapperProps {
  width?: string
  height?: string
  variant: 'danger' | 'info' | 'primary' | 'warning'
  justifycontent?: string
  $hasShadow?: boolean
}
