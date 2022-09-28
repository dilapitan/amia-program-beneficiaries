export const sortMonths = (arr) => {
  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const sortedMonths = arr.sort(function (a, b) {
    return MONTHS.indexOf(a) - MONTHS.indexOf(b)
  })

  return sortedMonths
}
