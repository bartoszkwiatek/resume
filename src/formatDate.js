const formatDate = (date) => {
  if (date === 'now') {
    return 'now'
  }
  const options = { year: 'numeric', month: 'long' };
  const dateObj = new Date(date)
  const string = dateObj.toLocaleDateString('en-EN', options)

  return string
}

export { formatDate }