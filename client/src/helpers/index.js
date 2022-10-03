const sortMonths = (months) => {
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

  const sortedMonths = months.sort(function (a, b) {
    return MONTHS.indexOf(a) - MONTHS.indexOf(b)
  })

  return sortedMonths
}

export const parenthesize = (string) => {
  return `(${string})`
}

export const stringifyArray = (array, othersSpecifyValue) => {
  let stringified = ''

  array.map((source, index) => {
    stringified = stringified.concat(source)

    if (source === 'Others') {
      stringified = stringified.concat(parenthesize(othersSpecifyValue))
    }

    if (index < array.length - 1) {
      stringified = stringified.concat(', ')
    }
  })

  return stringified
}

export const stringifyMonths = (months) => {
  let stringified = ''

  const sortedMonths = sortMonths(months)
  sortedMonths.map((month, index) => {
    stringified = stringified.concat(month)

    if (index < sortedMonths.length - 1) {
      stringified = stringified.concat(', ')
    }
  })

  return stringified
}

export const removeElementOfOthersArray = (array, index) => {
  array.splice(index, 1)
}
