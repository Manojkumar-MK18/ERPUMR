export interface TabWrapperProps {
  selectedTab: boolean
}

export interface ActionWrapperProps {
  handlePay: () => void
}

export interface PayProps {
  values: any
  //eslint-disable-next-line no-unused-vars
  setValues: (formValues: any) => void
}
