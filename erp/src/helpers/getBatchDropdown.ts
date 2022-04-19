import { Batch } from 'redux/academic/typings'

interface DropdownListProps {
  name: string
  id: string
}

const getBatchDropdown = (batches: Array<Batch>): Array<DropdownListProps> => {
  const batchList = batches.map((batch: Batch) => ({
    id: batch?.id,
    name: batch?.batchName
  }))
  return batchList
}

export default getBatchDropdown
