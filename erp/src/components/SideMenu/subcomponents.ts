import styled from 'styled-components'
import { Link } from 'react-router-dom'
import fonts, { weight } from 'const/fonts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors } from 'const/theme'
import { MenuContainerProps, ListProps } from './typings'

export const MenuContainer = styled.ul<MenuContainerProps>`
  margin: ${({ isChild }) => (isChild ? '0 0 0 16px' : '0')};
  width: ${({ isChild }) => (isChild ? '96%' : '100%')};
  z-index: 1;
  left: 0;
  background-color: ${({ theme }) => theme?.sideMenu.container};
  overflow-x: hidden;
  padding: 0;
  list-style: none;
  border-right: 1px solid ${({ theme }) => theme?.sideMenu.border};
`

export const Anchor = styled(Link)<ListProps>`
  width: 100%;
  padding: 16px 4px;
  text-decoration: none;
  font-size: ${fonts.small}px;
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme?.sideMenu.icon.selected : theme?.sideMenu.icon.normal};
  display: block;
  transition: 0.3s;
  font-weight: ${weight.normal};
  &:hover {
    color: ${({ theme }) => theme?.sideMenu.anchor.hover};
  }
  ${({ $isDisabled }) =>
    $isDisabled &&
    `
  pointer-events: none;`}
`

export const ListItem = styled.li<ListProps>`
  display: flex;
  &:hover {
    background: ${({ theme }) => theme?.sideMenu.menu.background};
  }
  background: ${({ $isSelected, theme }) =>
    $isSelected ? theme?.sideMenu.menu.background : colors.white};
  cursor: pointer;
`

export const MenuWrapper = styled.div`
  display: flex;
  padding: 4px 16px;
  height: 60px;
  width: 100%;
  align-items: center;
`

export const FontIcon = styled(FontAwesomeIcon)<ListProps>`
  margin: auto 12px;
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme?.sideMenu.icon.selected : theme?.sideMenu.icon.normal};
`

export const ChevronIcon = styled(FontAwesomeIcon)<ListProps>`
  padding: 0;
  margin: auto;
  margin-right: 0;
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme?.sideMenu.icon.selected : theme?.sideMenu.icon.normal};
`
