import { ReactElement, useState } from 'react'
import {
  MenuContainer,
  ListItem,
  Anchor,
  MenuWrapper,
  FontIcon,
  ChevronIcon
} from './subcomponents'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { SideMenuProps } from './typings'

const SideMenu = ({ menus = [] }: SideMenuProps): ReactElement => {
  const [selectedMenu, setSelectedMenu] = useState(0)

  return (
    <MenuContainer>
      {menus.map((menu, index) => {
        const { childs = [] } = menu
        const isSelected = selectedMenu === index 

        return (
          <>
            <ListItem
              key={`menu-${index}`}
              $isSelected={isSelected}
              onClick={() => {
                const hasChilds = !!childs?.length
                setSelectedMenu(index)
                if (hasChilds) {
                  // expand childs
                }
              }}
            >
              <MenuWrapper>
                <>
                  <FontIcon
                    icon={menu?.icon}
                    size="sm"
                    $isSelected={isSelected}
                  />
                  <Anchor
                    to={menu?.to}
                    $isSelected={isSelected}
                    $isDisabled={!!menu?.childs?.length}
                  >
                    {menu?.label}
                  </Anchor>
                  {menu.childs && menu.childs.length && (
                    <ChevronIcon
                      icon={[
                        'fas',
                        isSelected ? 'chevron-down' : 'chevron-right'
                      ]}
                      size="sm"
                      $isSelected={isSelected}
                    />
                  )}
                </>
              </MenuWrapper>
            </ListItem>
            {selectedMenu >= 0 && isSelected && (
              <MenuContainer isChild key={`subMenu-${index}`}>
                {childs.map((child, index) => (
                  <ListItem key={`child-${index}`}>
                    <FontIcon icon={child?.icon as IconProp} size="sm" />
                    <Anchor to={child?.to}>{child?.label}</Anchor>
                  </ListItem>
                ))}
              </MenuContainer>
            )}
          </>
        )
      })}
    </MenuContainer>
  )
}

export default SideMenu
