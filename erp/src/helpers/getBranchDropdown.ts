import { Branch } from 'redux/academic/typings'

interface DropdownListProps {
  name: string
  id: string
}

const getBranchDropDown = (
  branches: Array<Branch>
): Array<DropdownListProps> => {
  const branchDropdown = branches.map((branch: Branch) => ({
    id: branch?.id,
    name: branch?.branchName
  }))
  return branchDropdown
}
 
export default getBranchDropDown