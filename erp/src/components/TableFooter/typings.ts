export interface NavigationButtonProps {
  $isLeft?: boolean
}

export interface TableFooterProps {
  currentPage: number
  totalPages: number
  handlePrevious: () => void
  handleNext: () => void
}
