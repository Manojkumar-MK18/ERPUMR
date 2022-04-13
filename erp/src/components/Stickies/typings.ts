import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

export interface StickiesWrapperProps {
    width?: string
    height?: string
    variant: 'danger' | 'info' | 'primary' | 'warning'
    justifycontent?: string
    $hasShadow?: boolean
}
  
export interface StickiesProps {
    width: string
    height: string
    title: string
    notes: ReactNode
    variant: 'danger' | 'info' | 'primary' | 'warning'
    icon: IconProp
  }