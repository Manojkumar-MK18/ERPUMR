import { Institute } from 'redux/academic/typings'

interface DropdownListProps {
  name: string
  id: string
}

const getInstituteDropdown = (
  institutes: Array<Institute>
): Array<DropdownListProps> => {
  const instituteList = institutes.map((institute: Institute) => ({
    id: institute?.id,
    name: institute?.coachingCentreName,
    questionLimit: institute?.questionLimit
  }))
  return instituteList
}

export default getInstituteDropdown
