import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface CardProps {
  width: string
  height: string
  title: string
  subTitle: string
  variant: 'danger' | 'info' | 'primary' | 'warning'
  icon: IconProp
}