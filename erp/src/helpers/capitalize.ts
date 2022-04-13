const capitalize = (word: string = ''): string => {
  if (!word) return ''

  const loweredCase = word.toLowerCase()
  return word[0].toUpperCase() + loweredCase.slice(1)
}

export default capitalize
