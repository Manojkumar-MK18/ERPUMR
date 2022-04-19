import { Branch } from 'redux/academic/typings'

interface DropdownListProps {
  name: string
  id: string
}

const getBranchDropdown = (
  branches: Array<Branch>
): Array<DropdownListProps> => {
  const branchList = branches.map((branch: Branch) => ({
    id: branch?.id,
    name: branch?.branchName
  }))
  return branchList
}

export default getBranchDropdown
