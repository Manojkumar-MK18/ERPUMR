import { Menu } from "containers/SideNavigation/typings";

export interface MenuContainerProps {
  isChild?: boolean
}

export interface ListProps {
    $isSelected?: boolean
    $isDisabled?: boolean
}

export interface SideMenuProps {
  menus?: Array<Menu>
}