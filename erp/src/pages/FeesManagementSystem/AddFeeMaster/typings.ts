export interface Dropdown {
  id: string
  name: string
  type?: string
}

export type DropdownList = Array<Dropdown>

interface AddFeeMasterValues {
  description: string
  title: string
  terms: string
  courseId: string
  academicYear: string
  year: string
  amount: string
  regType: string
}

export default AddFeeMasterValues
