import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuState } from './typings'

const initialState: MenuState = {
  isMenuOpen: true,
  hasSubMenu: false
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    updateIsMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload
    },
    updateHasSubMenu: (state, action: PayloadAction<boolean>) => {
      state.hasSubMenu = action.payload
    }
  }
})

export default menuSlice.reducer
