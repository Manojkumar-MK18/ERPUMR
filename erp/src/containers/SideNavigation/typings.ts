import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface Item {
  icon: IconProp
  label: string
  to: string
}

export interface Menu {
  icon: IconProp
  label: string
  to: string
  childs?: Array<Item>
}

export interface MenuWrapperProps {
  isMenuOpen: boolean
  menus?: Array<Menu>
}

export interface SideNavigationProps {
  menus?: Array<Menu>
}
