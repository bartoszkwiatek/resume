const formatDate = (date, language) => {
  if (date === 'now') {
    return 'now'
  }
  const options = { year: 'numeric', month: 'long' }
  const dateObj = new Date(date)
  const string = dateObj.toLocaleDateString(
    `${language}-${language.toUpperCase()}`,
    options,
  )

  return string
}

export { formatDate }
