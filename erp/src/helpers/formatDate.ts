const formatDate = (dateString: string = ''): string => {
  let date = new Date(dateString)
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

export default formatDate
